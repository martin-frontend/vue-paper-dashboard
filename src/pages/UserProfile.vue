<template>
    <div class="row">
      <div class="col-md-3">
        <fg-input type="text"
                  label="Account"
                  placeholder="Account"
                  v-model="user.username">
        </fg-input>
      </div>
      <p-button type="info" round @click.native.prevent="handleSearch">
        Seacher
      </p-button>
      <div class="line"></div>
      <div class="col-12">
        <card :title="table.title" :subTitle="table.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table.data" :columns="table.columns">

            </paper-table>
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="pageNumber"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="pageSize"
              layout="sizes, prev, pager, next"
              :total="totalElements">
            </el-pagination>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import { getUser } from '@/api/user';

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      user: {},
      table: {
        title: "使用者資訊",
        // subTitle: "555555555",
        columns: ["Id", "Account", "Name"],
        data: []
      },
      pageNumber: 1,
      totalElements: 0,
      pageSize: 10
    };
  },
  mounted() {
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      const newObject = {
        page: this.pageNumber,
        size: this.pageSize
      }
      if(this.user.username) {
        newObject.account = this.user.username
      }
      getUser(newObject).then((res)=> {
        const { data } = res.data
        const { content, totalElements } = data
        this.table.data = [{id:1,account:'123',name:'444'}]
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .btn {
  margin: 30px 10px 15px;
}
/deep/ .el-pagination {
  text-align: right;
  padding: 0 20px 20px;
}
.line {
  width: 100%;
  height: 1px;
  background: #66615B;
  margin: 0 15px 15px;
}
</style>
