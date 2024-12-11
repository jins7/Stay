<template>
  <section class="bg-light">
    <div class="container pb-4">
      <div class="row">
        <div class="col-12 col-lg-6 pb-4 py-4">
          <!-- Use d-flex and justify-content-start to force left alignment -->
          <div class="d-flex col-5 py-3">
            <img src="../assets/image/logo/stay-agent5.png" alt="Logo" style="width: 100%" />
          </div>

          <!-- Text content remains normally left-aligned -->
          <div class="h5 mt-2 mb-4">Smart AI Agents for Smarter Operations.</div>

          <!-- Contact information section -->
          <div class="d-flex align-items-center mb-3">
            <img src="../assets/icon/mail.png" width="30" height="30" class="mx-0" alt="">
            <a href="mailto:stay.agent.team@gmail.com">
              <div class="h5 m-2 m-sm-3 fw-normal">stay.agent.team@gmail.com</div>
            </a>
          </div>

          <!-- Footer content -->
          <footer>
            <div class="">
              © Copyright 2024 STAY.Agent
            </div>
          </footer>
        </div>

        <div class="col-12 col-lg-5 d-flex flex-column justify-content-center">
          <div class="h4 fw-light text-center">
            <ul class="navbar-nav ms-auto  mb-lg-0">
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
      </div>
    </div>
  </section>
</template>


<script setup>
</script>