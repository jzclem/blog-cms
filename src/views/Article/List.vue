<template>
  <el-card class="box-card">
    <div slot="header">
      <span>文章列表</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="40" />
      <el-table-column prop="cate_1st_name" label="一级分类" />
      <el-table-column prop="cate_2nd_name" label="二级分类" />
      <el-table-column label="主图" width="100">
        <template slot-scope="scope">
          <span v-if="!scope.row.main_photo">暂无图片</span>
          <el-image v-else style="width: 80px;" :src="scope.row.main_photo" fit="cover"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="400" />
      <el-table-column prop="create_time" label="发布日期" width="180" />
      <el-table-column prop="update_time" label="更新日期" width="180" />
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-link :href="`#/article/edit/${scope.row.id}`" class="am-margin-right-sm" type="primary">
            <el-button size="mini" icon="el-icon-edit" type="primary" plain>编辑</el-button>
          </el-link>
          <el-button @click="handleRemove(scope.row.id,scope.$index)"
                     size="mini"
                     icon="el-icon-delete"
                     type="danger"
                     plain>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 16px"
      background
      :total="total"
      :current-page.sync="pageIndex"
      :page-size.sync="pageSize"
      :page-sizes="pageSizes"
      @current-change="loadList()"
      @size-change="loadList()"
      layout="->, prev, pager, next, sizes, jumper"/>
  </el-card>
</template>
<script>
  import { Article } from '@/api/index'

  export default {
    data () {
      return {
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        pageSizes: [5, 10, 20, 30, 50],
        tableData: [],
      }
    },
    created () {
      document.title = '文章列表'
      // 获取列表数据
      this.loadList()
    },
    methods: {
      async loadList () {
        let { status, data, total } = await Article.list({ pageindex: this.pageIndex, pagesize: this.pageSize })
        if (status) {
          this.total = total
          this.tableData = data
        }
      },
      handleRemove (id, index) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', {
          type: 'warning'
        })
          .then(async () => {
            // 删除
            let { status, data } = await Article.remove({ id })
            if (status) {
              this.tableData.splice(index, 1)
              this.$message.success('删除成功！')
            }
          })
      }
    }
  }
</script>
<style>
</style>
