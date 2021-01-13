### 概述
1. 组件之间共享数据的方式
    父子组件之间： 父 -> 子 v-bind； 子 -> 父 v-on
    兄弟组件之间： 接受数据的那个组件 $on ; 发送数据的那个组件使用 $emit
    事件总线

2. Vuex 是什么
    Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享

3. Vuex的好处
    能够在vuex中集中管理共享的数据，已于开发和后期维护
    能够高效地实现组件之间的数据共享，提高开发效率
    存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

4. 什么样的数据适合存储到vuex中
    一般情况下，只有组件之间共享的数据，才有必要存储到vuex中；对于组件中的私有数据，依旧存储在组件自身的data中即可

5. 使用vuex的数据
    this.$store.state.***
    使用mapState(['***','****']) // 需要 import { mapState } from 'vuex'

6. 修改vuex数据
    Mutation 用于更变 Store 的数据，不能在mutation中执行异步操作
    1). 在vuex只能通过mutation变更Store数据（只有在mutation中才可以修改数据），不可以直接操作Store中的数据
    2). 通过这种方式随让操作起来繁琐一些，帆是可以集中监控所有数据的变化
adspower 项目 this.$store.commit('user/setShowCountDown', this.sho wCountDown);
调用 user 模块里面的 mutation 里的 setShowCountDown 这个方法
    3). 使用mapMutations(['***','****']) 映射 拿到mutations中的方法 // 需要 import { mapMutations } from 'vuex'

7. 异步操作
    Action 用于处理异步操作，adspower 项目中在 action 中请求，获取公司信息
    在action中不能修改state的数据
    如果要修改的话，只能调用 mutation 中的方法调用。
    1. 定义在actions里面 addAsync() { // 异步操作 } ，在组件调用的适合使用this.$store.dispatch('addAsync', data) data可以是一个对象
    2. 使用mapActions(['***','****']) 映射 拿到mapActions中的方法 // 需要 import { mapActions } from 'vuex'

8. Getter 用于对 Store 中的数据进行加工处理形成新的数据
    1. Getter 可以对 Store 中已有的数据加工处理之后形成的数据，类似Vue的计算属性。
    2. Store 中的数据发生变化，Getter的数据也会跟着变化
    使用Getter
        1). $store.getters.showNum();
        2).  使用mapGetters(['***','****']) 映射 拿到mapGetters中的方法 // 需要 import { mapGetters } from 'vuex'