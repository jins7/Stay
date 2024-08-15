<template>
    <section class="sticky-top bg-light">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container" id="app">
                <a href="/" class="w-50 w-md-25">
                    <div class="navbar-brand">
                      <img src="../assets/image/intro/stay-agent.png" class="img-fluid" alt="...">
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" ref="navbarToggler">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarContent">
                  <ul class="navbar-nav ms-auto gap-2 mb-2 mb-lg-0">
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/" active-class="text-primary" @click="toggleNavbar">
                        <strong class="h5 fw-normal">首页</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/stay" active-class="text-primary" @click="toggleNavbar">
                        <strong class="h5 fw-normal">STAY</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                        <router-link class="nav-link" aria-current="page" to="/agent" active-class="text-primary" @click="toggleNavbar">
                          <strong class="h5 fw-normal">Agent</strong>
                        </router-link>
                    </li>
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" aria-current="page" href="#" active-class="text-primary">相关产品</a>-->
<!--                        </li>-->
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/team" active-class="text-primary" @click="toggleNavbar">
                        <strong class="h5 fw-normal">团队介绍</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/join" active-class="text-primary" @click="toggleNavbar">
                        <strong class="h5 fw-normal">加入我们</strong>
                      </router-link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
  mounted() {
    // DOM 已加载，refs 应该可用了
  },
  methods: {
    toggleNavbar() {
      if (this.$refs.navbarContent && this.$refs.navbarContent.classList.contains('show')) {
        this.$refs.navbarToggler.click(); // 模拟点击折叠按钮来关闭导航栏
      }
    }
  }
}
</script>