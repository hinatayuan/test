<template>
    <div>
      <div style="display:flex">
          <div class="tab" v-for='(item,index) in items' @click='tab(index)' :class="{active : isActive === index}">
            {{item}}
          </div>
      </div>
      <div><component :is='test'></component></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Test from './test.vue'
    export default {
        name: '',
        props: {

        },
        data () {
            return {
               items:[1,2,3],
               isActive:null,
               test:Test
            }
        },
        created() {
            // ajax
            // 实例已经创建完成之后被调用。
            // 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
            // watch/event 事件回调。然而，挂载阶段还没开始， 属性目前不可见。
        },
        components: {
            // 注册子组件
        },
        methods: {
            // 注册方法
            tab(index){
              this.isActive=index;
            }
        },
        computed: {},
        mounted() {
            // el 被新创建的 vm. 替换，并挂载到实例上去之后调用该钩子。
            // 如果 root 实例挂载了一个文档内元素，
            // 当 mounted 被调用时 vm. 也在文档内。
        },
        updated() {
            // 当这个钩子被调用时，组件 DOM 已经更新，
            // 所以你现在可以执行依赖于 DOM 的操作。
            // 然而在大多数情况下，你应该避免在此期间更改状态，
            // 因为这可能会导致更新无限循环。
        },
        activated() {
            // keep-alive 组件激活时调用。
        },
        deactivated() {
            // keep-alive 组件停用时调用。
        },
        beforeDestroy() {
            // 实例销毁之前调用。在这一步，实例仍然完全可用。
        },
        destroyed() {
            // Vue 实例销毁后调用。
            // 调用后，Vue 实例指示的所有东西都会解绑定，
            // 所有的事件监听器会被移除，所有的子实例也会被销毁。
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    width: 20px
    height:20px
    background-color:hotpink
    margin-left:5px
    &.active
      background-color:yellow
</style>
