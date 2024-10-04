<template>


<section>
  <div class="bg-img8 vh-100">
    <div class="container h-100 d-flex flex-column justify-content-center">
      <div class="row text-left mb-5">
        <div class="col-12 mb-5">
          <div class="display-2 mb-5">
<!--            STAY.Agent：-->
            定制你的社交体验，<br>打造端到端智能互动生态。
          </div>
          <div class="display-7">
            借助 Agent 的强大能力，把你的灵感变成软件，把你的语言变成应用场景。
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-img10 pb-5 py-sm-5">
    <div class="container ">
      <div class="row justify-content-center">
        <div class="h2 fw-light text-center p-5">
          我们的愿景
        </div>
        <div class="col-12 col-sm-11 h5 fw-light pb-4 pb-sm-5 lh-base">
          我们的愿景是创建一个全球性的社交平台，使每一位用户都能成为其社交体验的真正主人。通过先进的大语言模型技术，<mark>STAY.Agent赋予用户高效开发和定制自己独特社交产品的能力</mark>。我们致力于打破传统社交媒体的界限，提供一个高度个性化、互动性强的平台，让用户不仅能享受交流的乐趣，还能通过创新和创意实现自己的社交梦想。STAY.Agent不仅是一个工具，更是一个让每个人都能创造、分享并连接彼此的社交生态系统，从而建立一个更加紧密和包容的数字社区。
        </div>
        <div class="col-12 col-sm-11 pb-sm-5">
          <img src="../assets/image/home/structure.png" class="img-fluid rounded-3 my-3" alt="...">
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light py-3 py-sm-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 h2 fw-light text-center mt-5 mb-3">
          为什么使用我们？
        </div>

        <div v-for="feature in features" class="col-12 col-sm-6 py-2 py-sm-4">
          <div class="card">
            <div class="card-body bg-light">
              <div class="d-flex justify-content-center align-items-center py-3">
                <img :src="feature.logo" width="30" height="30" class="m-2" alt="">
                <div class="m-2 h5 fw-light lh-base">
                  {{ feature.name }}
                </div>
              </div>
              <div class="text-center">
                <div class="pb-2 h6 fw-light lh-base">
                  {{ feature.intro }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-img11">
    <div class="container pb-1 py-sm-5">
      <div class="row mb-5">
        <div class="col-12 h2 fw-light text-center mb-4 mt-5">
          核心产品与服务
        </div>

        <div class="col-12  d-flex justify-content-center align-items-center">
          <img src="../assets/image/home/overview.png" class="img-fluid rounded-3 my-3" alt="...">
        </div>
<!--        <div v-for="product in products">-->
<!--          <div v-if="product.direct === 'left'">-->
<!--            <div class="row border border-3 rounded-3 p-1 p-sm-4 m-1 my-sm-4 bg-light justify-content-around">-->
<!--              <div class="col-12 col-md-6 pb-4 py-4 align-items-center justify-content-center d-flex flex-column text-center">-->
<!--                <div class="h4 fw-normal col-12">{{ product.name }}</div>-->
<!--                <div class="h5 fw-light lh-base pt-4 col-12">{{ product.intro }}</div>-->
<!--                <div class="justify-content-center py-3">-->
<!--                  <router-link class="btn btn-secondary px-5 py-3" aria-current="page" to="/stay">产品详情</router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-5 d-flex justify-content-center align-items-center mb-4">-->
<!--                <img :src="product.logo" class="img-fluid rounded-3" alt="...">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div v-else-if="product.direct === 'right'">-->
<!--            <div class="row flex-row-reverse border border-3 rounded-3 p-1 p-sm-4 m-1 my-sm-4 bg-light justify-content-around">-->
<!--              <div class="col-12 col-md-6 pb-4 py-4 align-items-center justify-content-center d-flex flex-column text-center">-->
<!--                <div class="h4 fw-normal col-12">{{ product.name }}</div>-->
<!--                <div class="h5 fw-light lh-base pt-4 col-12">{{ product.intro }}</div>-->
<!--                <div class="justify-content-center py-3">-->
<!--                  <router-link class="btn btn-secondary px-5 py-3" aria-current="page" to="/agent">产品详情</router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-5 d-flex justify-content-center align-items-center mb-4">-->
<!--                <img :src="product.logo" class="img-fluid rounded-3" alt="...">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>


  <div class="py-5">
    <div class="row">
      <div class="col-12 h2 fw-light text-center mb-3 my-sm-5">
        成员来自
      </div>

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