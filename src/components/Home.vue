<template>

<section>
  <div class="bg-img8 pb-5">
    <div class="container h-100 d-flex flex-column overflow-hidden ">
      <div class="row text-left">
        <div class="col-12 px-sm-5">
          <div class="display-2 my-5 pt-5 fw-normal">
            Smart AI Agents for
            <br/>Smarter Operations.
          </div>
          <div class="display-9 text-secondary">
            Agentic Process Automation: Smarter Workflows, <br/>Lower Costs, Greater Impact.
          </div>

          <router-link class="btn btn-primary px-4 py-3 mt-5 rounded-3" aria-current="page" to="/stay">Join Waitlist</router-link>
        </div>
      </div>
    </div>
  </div>

<!--    <img src="../assets/image/poster/data-bg.png" class="img-fluid rounded-3" alt="...">-->
    <img src="../assets/image/home/workflow.png" class="img-fluid rounded-3" alt="...">

  <div class="container h-100 d-flex flex-column ">
    <div class="row text-left mb-5">
      <div class="col-12 px-sm-5 text-center">
        <div class="btn btn-outline-primary disabled px-4 mt-5 rounded-3">
          Our Philosophy
        </div>
        <div class="display-3 mt-4 mb-5 fw-normal ">
          From data to information, <br/>from information to knowledge, <br/>from knowledge to value.
        </div>
        <div class="display-9 text-secondary mb-5">
          The flow from data to information to knowledge.
        </div>

        <img src="../assets/image/poster/DataInfoKnowledge.png" class="img-fluid rounded-3" alt="...">

      </div>
    </div>
  </div>

  <div class="container h-100 d-flex flex-column ">
    <div class="row text-left my-5">
      <div class="col-12 px-sm-5 text-center">
        <div class="btn btn-outline-primary disabled px-4 mt-5 rounded-3">
          Our Misson
        </div>
        <div class="display-3 mt-4 mb-5 fw-normal ">
          Streamlined, Standardized, and Intelligent <br> Data Processing with Agents
        </div>


      </div>
      <div class="col-12 col-sm-6 text-center">
        <div class="display-9 text-secondary">
          ETL (Extract, Transform, Load) AI Agent
        </div>
        <img src="../assets/image/poster/ETL-progress.png" class="img-fluid col-12" alt="...">
        <router-link class="btn btn-primary px-4 py-3  rounded-3" aria-current="page" to="/stay">Learn more →</router-link>
      </div>
      <div class="col-12 col-sm-6 text-center">
        <div class="display-9 text-secondary">
          Agentic Workflows to Automate Everything
        </div>
        <img src="../assets/image/poster/agent-platform.png" class="img-fluid col-12" alt="...">
        <router-link class="btn btn-primary px-4 py-3  rounded-3" aria-current="page" to="/stay">Learn more →</router-link>
      </div>

    </div>
  </div>

  <div class="container h-100 d-flex flex-column ">
    <div class="row text-left my-5">
      <div class="col-12 px-sm-5 text-center">
        <div class="btn btn-outline-primary disabled px-4 mt-5 rounded-3">
          Our Use Cases
        </div>
        <div class="display-3 mt-4 mb-5 fw-normal ">
          Built with STAY.Agent
        </div>
      </div>

      <div class="col-12 col-sm-8 card text-center">
<!--        <div class="display-9 text-secondary">-->
<!--          Website data ETL (Extract, Transform, Load) Mulit-Agents System-->
<!--        </div>-->
        <img src="../assets/image/poster/data-agent.png" class="img-fluid col-12" alt="...">
      </div>

      <div class="col-12 col-sm-4 card">
        <div class="card-body">
          <div class="d-flex col-1">
            <img src="../assets/icon/workflow.png" class="img-fluid my-2" alt="...">
          </div>
          <div class="h4 text-start">Data ETL Agent</div>
          <div class="display-10 text-start text-secondary mb-3">Agentic Workflows</div>
          <div class="btn btn-light col-12 disabled text-start my-1">1. A requirements analysis system for assisting independent developers and product managers.</div>
          <div class="btn btn-light col-12 disabled text-start my-1">2. Data collection and organization for the paper's experiments.</div>
        </div>
      </div>

<!--      <div class="col-12 col-sm-4 text-center">-->
<!--        <div class="display-9 text-secondary ">-->
<!--          Advance to ITEC Global Finals-->
<!--        </div>-->
<!--        <div class="display-10 text-secondary mb-4">-->
<!--          2024.11.08-->
<!--        </div>-->
<!--        <img src="../assets/image/poster/itec.jpg" class="img-fluid col-12" alt="...">-->
<!--      </div>-->
    </div>
  </div>


  <div class="container h-100 d-flex flex-column ">
    <div class="row text-left my-5">
      <div class="col-12 px-sm-5 text-center">
        <div class="btn btn-outline-primary disabled px-4 mt-5 rounded-3">
          Our Blogs
        </div>
        <div class="display-3 mt-4 mb-5 fw-normal ">
          What's News?
        </div>
      </div>

      <div class="col-12 col-sm-6 text-center">
        <div class="display-9 text-secondary">
          Advance to the Semifinals of the ITEC Singapore
        </div>
        <div class="display-10 text-secondary mb-4">
          2024.10.08
        </div>
        <img src="../assets/image/poster/itec-singapore.png" class="img-fluid col-12" alt="...">
      </div>

      <div class="col-12 col-sm-6 text-center">
        <div class="display-9 text-secondary ">
          Advance to ITEC Global Finals
        </div>
        <div class="display-10 text-secondary mb-4">
          2024.11.08
        </div>
        <img src="../assets/image/poster/itec.jpg" class="img-fluid col-12" alt="...">
      </div>
    </div>
  </div>

  <div class="container h-100 d-flex flex-column ">
    <div class="row text-left mb-5">
      <div class="col-12 px-sm-5 text-center">
        <div class="btn btn-outline-primary disabled px-4 mt-5 rounded-3">
          Our Team
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="horizontal-scroll">
        <div class="scroll-content" :style="scrollStyle">
          <div v-for="(friend, index) in paddedSchools" :key="index" class="col-1 p-2 p-sm-3 d-flex justify-content-center align-items-center">
            <img :src="friend.logo" class="m-2 img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 my-sm-4">
      <div class="horizontal-scroll">
        <div class="scroll-content-reverse" :style="scrollStyleReverse">
          <div v-for="(friend, index) in paddedCompanies" :key="'right-' + index" class="col-1 p-2 p-sm-3 d-flex justify-content-center align-items-center">
            <img :src="friend.logo" class="m-2 img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>





</section>
</template>

<script>
import data from "bootstrap/js/src/dom/data.js";

export default {
  computed: {
    paddedSchools() {
      // 计算填充元素数量，根据需要动态填充
      const itemsToFill = Math.ceil(this.containerWidth / this.itemWidth);
      const paddingSchools = this.schools.slice(0, itemsToFill);
      // 将内容重复并在开头添加填充内容
      return [...paddingSchools, ...this.doubledSchools];
    },
    paddedCompanies() {
      // 计算填充元素数量，根据需要动态填充
      const itemsToFill = Math.ceil(this.containerWidth / this.itemWidth);
      const paddingCompanies = this.companies.slice(0, itemsToFill);
      // 将内容重复并在开头添加填充内容
      return [...paddingCompanies, ...this.doubledCompanies];
    },
    doubledSchools() {
      return [...this.schools, ...this.schools, ...this.schools];
    },
    doubledCompanies() {
      return [...this.companies, ...this.companies, ...this.companies];
    },
    scrollStyle() {
      const totalWidth = this.paddedSchools.length * this.itemWidth;
      const animationDuration = totalWidth / 70; // 控制速度，20px/s
      return {
        width: `${totalWidth}px`,
        animationDuration: `${animationDuration}s`,
      };
    },
    scrollStyleReverse() {
      const totalWidth = this.paddedCompanies.length * this.itemWidth;
      const animationDuration = totalWidth / 70; // 控制速度，20px/s
      return {
        width: `${totalWidth}px`,
        animationDuration: `${animationDuration}s`,
        animationDirection: 'reverse', // 反向滚动
      };
    },
  },
  mounted() {
    this.updateContainerWidth();
    window.addEventListener('resize', this.updateContainerWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateContainerWidth);
  },
  methods: {
    updateContainerWidth() {
      this.containerWidth = this.$el.querySelector('.horizontal-scroll').offsetWidth || window.innerWidth;
    },
  },

  data() {
    return {
      features: [
        {
          logo: new URL('@/assets/icon/BoostEfficiency.png', import.meta.url).href,
          name: "庞大的底层架构",
          intro: "通过逻辑流数据流分层设计，为上层应用的丰富生态提供底层架构支撑"
        },
        {
          logo: new URL('@/assets/icon/BoostRevenue.png', import.meta.url).href,
          name: "灵活的模块组合",
          intro: "用户分别编辑UI界面和逻辑事件，设计出全新的玩法，赋予用户高效开发和定制自己独特社交产品的能力"
        },
        {
          logo: new URL('@/assets/icon/ResilientTeam.png', import.meta.url).href,
          name: "丰富的内容生态",
          intro: "不仅是一个工具，更是一个让每个人都能创造、分享并连接彼此的社交生态系统，从而建立一个更加紧密和包容的数字社区"
        },
        {
          logo: new URL('@/assets/icon/UnlockClients.png', import.meta.url).href,
          name: "升级的媒介体验",
          intro: "从二维平面到三维空间，从上游生产往下游传递到用户自定义构建逻辑，通过媒介升级，构建全新的社交媒体商业链路"
        }
      ],
      products: [
        {
          direct: "left",
          logo: new URL('@/assets/image/home/stay.png', import.meta.url).href,
          name: "STAY.Agent社交软件",
          intro: "STAY.Agent位于无代码应用开发革命的前沿，为那些希望无需编程专业知识就能将自己的应用想法实现的个人提供了一个易于访问且富有启发性的平台。用户可以利用各种可定制的模块和小部件，在一个友好的用户环境中创建、部署并推广他们的应用。通过其在线市场，STAY.Agent培养了一个致力于创新的创作者社区，使他们不仅能够打造自己的应用，还能将这些创意作品分享并展示给全球观众。"
        },
        {
          direct: "right",
          logo: new URL('@/assets/image/home/agent.png', import.meta.url).href,
          name: "STAY.Agent智能体",
          intro: "Stay.Agent不仅是一个工具，更是一个让每个人都能创造、分享并连接彼此的社交生态系统，从而建立一个更加紧密和包容的数字社区。"
        }
      ],
      schools:[
        {
          logo: new URL('@/assets/image/home/school/NYTU.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/NUS.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/HKUST.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/USTC2.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/SEU.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/TongJi.png', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/school/TSingHua.png', import.meta.url).href,
        },
      ],
      companies:[
        {
          logo: new URL('@/assets/image/home/company/bilibili.jpg', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/company/tencent.jpeg', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/company/tencent_game.jpg', import.meta.url).href,
        },
        {
          logo: new URL('@/assets/image/home/company/SquirrelAI.jpg', import.meta.url).href,
        },
      ],
      containerWidth: 0,
      itemWidth: 100, // 160px (col-2) + margin
    }
  },
}
</script>

<style>
.horizontal-scroll {
  overflow: hidden;
  white-space: nowrap;
  width: 100%; /* 确保滚动容器宽度为100% */
}

.scroll-content, .scroll-content-reverse {
  display: inline-flex;
  white-space: nowrap;
  animation: scroll-left linear infinite;
}

img {
  display: block;
  margin: 0 auto;
}

/* 自动滚动动画 */
@keyframes scroll-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>