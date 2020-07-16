<template>
  <div>
    <el-upload
      class="upload-demo"
      :action="upload_url"
	  list-type="picture-card"
      ref="upload"
      :accept="typeStr"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="success"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :auto-upload="true"
      :http-request="uploadSectionFile"
	  :before-upload="onBeforeUpload"
	  :on-change='handleOnChange'
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      upload_url: "/v1/posts/", // 上传地址
      maxVolume: 1, // 文件最大体积
      typeStr: ".jpg",
      upload_name: "",
      ad_url: "", //上传后的图片或视频URL
      ad_url_list: [] //预览列表
    };
  },
  methods: {
    handleOnChange(file) {
	  this.fromData = new FormData();
      this.fromData.append("file", file.raw);
	  this.files = file;
	},
   onBeforeUpload(file) {
      this.fromData = new FormData();
      this.fromData.append("file", file);
    },
    success(response, file, fileList) {
      console.log(response, file, fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // --------------------
    uploadSectionFile(params) {
      let that = this;
      let file = params.file;
      let typeList = ["jpg"];
      let type = file.name.split(".")[1];
      console.log(file);
      let isLt5M = file.size / 1024 / 1024 < this.maxVolume; // 限制文件大小
	  let uploadFiles = that.$refs.upload.uploadFiles.filter(item => item.status === 'success');
      if (!isLt5M) {
        this.$message.error("只能上传图片大小小于2M");
        setTimeout(() => (that.$refs.upload.uploadFiles = uploadFiles), 1000);
        return;
      } else if (!typeList.includes(type)) {
        this.$message.error("只能上传" + this.typeStr + "格式");
        setTimeout(() => (that.$refs.upload.uploadFiles = uploadFiles), 1000);
        return;
      }
      this.uploadFile(file);
    },
    uploadFile(file) {
      let self = this;
      let formData = new FormData();
      formData.append("file",file);
      axios
        .post(self.upload_url, formData)
        .then(function(res) {
          console.log(res,'---------');
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>