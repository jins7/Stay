<template>
    <section class="sticky-top bg-light">
        <nav class="navbar navbar-expand-lg">
            <div class="container" id="app">
                <a href="/" class="" style="width: 185px">
                    <div class="navbar-brand">
                      <img src="../assets/image/logo/stay-agent5.png" class="img-fluid" alt="...">
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
                      <router-link class="nav-link" aria-current="page" to="/" active-class="text-blue" @click="toggleNavbar">
                        <strong class="h6 fw-normal">Platform</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/stay" active-class="text-blue" @click="toggleNavbar">
                        <strong class="h6 fw-normal">Solutions</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                        <router-link class="nav-link" aria-current="page" to="/agent" active-class="text-blue" @click="toggleNavbar">
                          <strong class="h6 fw-normal">Agents</strong>
                        </router-link>
                    </li>
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/tools" active-class="text-blue" @click="toggleNavbar">
                        <strong class="h6 fw-normal">Tools</strong>
                      </router-link>
                    </li>
                    <li class="nav-item text-center">
                      <router-link class="nav-link" aria-current="page" to="/team" active-class="text-blue" @click="toggleNavbar">
                        <strong class="h6 fw-normal">Team</strong>
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