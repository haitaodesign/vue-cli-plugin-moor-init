<template>
  <div>
    <!-- logo start-->
    <slot></slot>
    <!-- logo end-->
    <el-menu
      style="height:100%;border-right:none;"
      :default-active="defaultActive"
      :collapse="isCollapse"
      background-color="#202736"
      text-color="#99a3ae"
      active-text-color="#fff"
      :collapse-transition="false"
      @select="handleOnSelect"
      >
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length > 0">
          <moor-aside-menu-item
            v-if="item.children && item.children.length > 0"
            :key="item._id"
            :parentItem="item"
            />
        </template>
        <template v-else>
          <el-menu-item
            :index="item.path"
            :key="item._id"
            >
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
/*
  1. 自定义icon(使用阿里的iconfont)
  2. 通过数据动态生成菜单（定义数据结构？）
  3. 返回当前点击菜单的节点数据
  4. 思考比较合理的权限管理（动态路由挂载）
*/
import MoorAsideMenuItem from './moor-aside-menu-item.vue'
export default {
  name: 'SiderMenu',
  components: {
    MoorAsideMenuItem
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleOnSelect (index, indexPath) {
      this.$emit('on-select', { index, indexPath })
    }
  }
}
</script>

<style lang="stylus">
.is-active
  background-color #459ae9 !important
</style>
