<template>
  <section>
<!--    <div class="bg-img8">-->
<!--      <div class="container py-sm-5">-->
<!--        <div class="row justify-content-center mb-sm-5">-->
<!--          <div class="display-6 text-center p-5">-->
<!--            我们的愿景-->
<!--          </div>-->
<!--          <div class="col-sm-10 h4 fw-light text-center pb-5 lh-lg">-->
<!--            我们的愿景是创建一个全球性的社交平台，使每一位用户都能成为其社交体验的真正主人。通过先进的大语言模型技术，<mark>STAY.Agent赋予用户高效开发和定制自己独特社交产品的能力</mark>。我们致力于打破传统社交媒体的界限，提供一个高度个性化、互动性强的平台，让用户不仅能享受交流的乐趣，还能通过创新和创意实现自己的社交梦想。STAY.Agent不仅是一个工具，更是一个让每个人都能创造、分享并连接彼此的社交生态系统，从而建立一个更加紧密和包容的数字社区。-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


    <div class="bg-img8">
      <div class="container py-1 py-sm-5">
        <div class="row my-4 my-sm-5">
          <div class="col-12 col-sm-10 col-md-8">
            <div class="display-4 text-dark">
              STAY.Agent团队
            </div>

            <div class="h5 fw-light lh-base mb-5 my-5">
              STAY.Agent团队由具备深厚技术背景和丰富行业经验的成员组成，拥有多年在人工智能、大数据、软件开发等领域的实践经验。团队成员来自知名科技公司和顶尖学术机构，覆盖技术研发、产品设计、市场运营等关键领域。凭借对AI技术的深刻理解，团队致力于推动智能软件创新，提供个性化、高效的用户体验，专注打造全球性、用户导向的社交平台。
            </div>
          </div>
<!--          <div class="display-6 text-center py-4">-->
<!--            我们的团队-->
<!--          </div>-->
          <div class="h3 fw-light pt-sm-4">
            创始团队
          </div>
          <Avatar v-for="item in items1" :key="item.id" :data="item" />
        </div>
      </div>
    </div>
    <div class="bg-img8">
      <div class="container py-4 py-sm-5">
        <div class="row">
          <div class="h3 fw-light pt-sm-4">
            核心团队
          </div>
          <Avatar v-for="item in items2" :key="item.id" :data="item"/>
        </div>
      </div>
    </div>
    <div class="bg-img5">
      <div class="container py-4 py-sm-5">
        <div class="row">
          <div class="h3 fw-light pt-sm-4">
            技术顾问 - 导师
          </div>
          <Avatar v-for="item in items3" :key="item.id" :data="item" />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
  components: { Avatar },
  data() {
    return {
      items1: [
        { id: 1, type: "member", name: '苏江', avatar: new URL('@/assets/image/avatar/sj.jpg', import.meta.url).href, title: '创始人',  intro: ['SpaceAI创始人，为中国船级社提供AI saas服务', 'AI炼丹艺术创始人，为企业定制AI数字艺术作品']},
        { id: 1, type: "member", name: '王琨', avatar: new URL('@/assets/image/avatar/wk.jpg', import.meta.url).href, title: '联合创始人',  intro: ['南洋理工大学博士后', '中国科学技术大学博士']},
        { id: 1, type: "member", name: '徐成卓', avatar: new URL('@/assets/image/avatar/xcz.jpeg', import.meta.url).href, title: '系统架构师',  intro: ['东南大学博士']},
        { id: 1, type: "member", name: '单子扬', avatar: new URL('@/assets/image/avatar/szy.jpeg', import.meta.url).href, title: '前端开发程序员',  intro: ['哔哩哔哩开发工程师', '中国科学技术大学硕士']},
        { id: 1, type: "member", name: '徐刚', avatar: new URL('@/assets/image/avatar/xg.jpg', import.meta.url).href, title: '后端开发程序员',  intro: ['高级开发工程师，5年以上开发经历']},
      ],

      items2: [
        { id: 1, type: "member", name: '方俊峰', avatar: new URL('@/assets/image/avatar/fjf.jpg', import.meta.url).href, title: 'AI算法研发工程师',  intro: ['中国科学技术大学博士']},
        { id: 1, type: "member", name: '吴浔', avatar: new URL('@/assets/image/avatar/wx.jpg', import.meta.url).href, title: 'AI大模型算法研发工程师',  intro: ['清华大学硕士', '微软算法工程师']},
        { id: 1, type: "member", name: '詹正道', avatar: new URL('@/assets/image/avatar/zzd.jpg', import.meta.url).href, title: '产品经理',  intro: ['新加坡国立大学硕士']},
        { id: 1, type: "member", name: '杜欣', avatar: new URL('@/assets/image/avatar/dx.jpeg', import.meta.url).href, title: '产品经理',  intro: ['福建师范大学', '腾讯产品经理']},
        { id: 1, type: "member", name: '王世龙', avatar: new URL('@/assets/image/avatar/wsl.jpg', import.meta.url).href, title: 'AI多模态算法研发工程师',  intro: ['中国科学技术大学硕士']},
        { id: 1, type: "member", name: '段逸凡', avatar: new URL('@/assets/image/avatar/dyf.jpg', import.meta.url).href, title: 'AI多模态算法研发工程师',  intro: ['中国科学技术大学硕士']},
        { id: 1, type: "member", name: '吴昊', avatar: new URL('@/assets/image/avatar/wh.jpg', import.meta.url).href, title: 'AI大模型算法研发工程师',  intro: ['中国科学技术大学硕士', '腾讯算法工程师']},
        { id: 1, type: "member", name: '张桂彬', avatar: new URL('@/assets/image/avatar/zgb.jpg', import.meta.url).href, title: 'AI Agent算法研发工程师',  intro: ['香港中文大学硕士']},
        { id: 1, type: "member", name: '余淼', avatar: new URL('@/assets/image/avatar/ym.jpg', import.meta.url).href, title: 'AI Agent算法研发工程师',  intro: ['中国科学技术大学']},
        { id: 1, type: "member", name: '毛骏源', avatar: new URL('@/assets/image/avatar/mjy.jpg', import.meta.url).href, title: 'AI Agent算法研发工程师',  intro: ['中国科学技术大学']},
        { id: 1, type: "member", name: '孟凡词', avatar: new URL('@/assets/image/avatar/mfc.jpg', import.meta.url).href, title: 'AI Agent算法研发工程师',  intro: ['中国科学技术大学']},
        { id: 1, type: "member", name: '章红', avatar: new URL('@/assets/image/avatar/zh.jpg', import.meta.url).href, title: '开发程序员',  intro: ['扬州大学']},
      ],

      items3: [
        { id: 1,
          type:"expert",
          name: '刘杨',
          avatar: new URL('@/assets/image/avatar/ly.jpeg', import.meta.url).href,
          title: '南洋理工大学计算机科学与工程学院的正教授兼大学领导论坛主席，新加坡杰青(创业奖)',
          research: 'Software Engineering、Cyber Security、Trustworthy AI、Software Analytics、Software Supply Chain',
          website: 'https://personal.ntu.edu.sg/yangliu/',
          intro: [
            '-刘杨教授是南洋理工大学计算机科学与工程学院的正教授兼大学领导论坛主席。他目前的研究兴趣包括网络安全、软件工程和人工智能。此外，他还担任HP-NTU数字制造联合实验室的项目主任、新加坡国家卓越卫星中心的副主任以及南洋理工大学能源研究院网络安全集群的集群主任。',
            '-刘杨教授在模型检测算法和工具方面，开发了名为流程分析工具包（Process Analysis Toolkit, PAT）的模型检测开发框架。这个独立的框架支持各种系统（如并发和实时系统、概率系统、Web服务、安全协议、传感器网络、软件架构描述语言等）的组合、模拟和推理。',
            '-在网络安全领域，刘杨教授致力于恶意软件的建模、检测、分类和生成，重点关注Javascript恶意软件（参见AsiaCCS 2015和ISSTA 2015论文）、桌面恶意软件和Android恶意软件（AsiaCCS 2016, IJCNN 2016, ISSTA 2016, TSE 2017）。他开发了利用机器学习和程序分析（包括静态和动态）对二进制代码进行漏洞建模和检测的工具（FSE 2016, ICSE 2017, S&P 2017, FSE 2017, FSE 2018, CCS 2018, ICSE 2019, USENIX 2020）。在他的Securify研究项目（2015 - 2020）中，他使用不同的验证方法对从硬件（FM 2016论文）、虚拟机管理程序（ISSRE 2015, TACAS 2016, TACAS 2017, TDSC 2017, FM 2018）、程序到安全协议（TSE 2017）进行形式验证。最近，他开始研究汽车安全和自动驾驶车辆安全，包括它们的安全设计、运行时安全监控和响应，以及安全测试和认证。',
            '-在软件工程领域，刘杨教授的研究课题包括程序规范学习和模型学习（ASE 2013和FSE 2015论文）、性能分析（ICSE 2016和ICSE 2018）、Android能量分析（TMC 2016论文）、可靠性分析（ISSTA 2014论文）、代码克隆分析（ICSE 2014, FSE 2016, ASE 2017和ASE 2018论文）、程序调试（ICSE 2017论文）、程序测试（FSE 2017论文）、自动循环分析（ISSTA 2015, FSE 2016, FSE 2017, ASE 2017和TSE 2018论文）、使用模型检测、符号执行和机器学习技术测试和验证深度学习算法（ASE 2018和ISSRE 2018）。他正在构建与这些方面相关的工具。',
            '-在Android系统方面，刘杨教授从事App恶意软件检测与分类（AsiaCCS 2016, IJCNN 2016, ISSTA 2016, TSE 2017）、生成（TIFS 2017）和数据分析、App漏洞分析（ICSE 2021）、App测试（FSE 2017, ICSE 2018, ASE 2018）、Android操作系统测试和模糊测试，以及自动UI生成（ICSE 2018）。',
            '-在人工智能领域，刘杨教授的研究课题涉及AI的安全性、鲁棒性、公平性和可解释性。他的Deep系列工作（如DeepMutation、DeepHunter、DeepStellar）及其应用广受认可。', '在大数据领域，刘杨教授推广一种基于行为学习和分析的事件分析概念，并将其应用于体育和金融系统（参见他的ICTAC 2014和TASE 2015邀请论文）。']},
        { id: 1,
          type:"expert",
          name: '文青松',
          avatar: new URL('@/assets/image/avatar/wqs.jpeg', import.meta.url).href,
          title: '松鼠AI公司，AI研究院院长&首席科学家',
          research: 'AI for Time Series、AI for Education、Decision Intelligence、LLM & GenAI',
          website: 'https://sites.google.com/site/qingsongwen8/',
          intro: [
            '-文青松现任松鼠AI公司的人工智能研究院院长兼首席科学家，领导一个位于西雅图和上海的团队，通过人工智能技术（如大语言模型、AI代理、生成式AI、Transformer、SSL、GNN、可解释AI等）从事教育科技领域的工作。',
            '-在此之前，他曾在阿里巴巴、Qualcomm、Marvell等公司工作，并获得了美国佐治亚理工学院(Georgia Institute of Technology)的电气与计算机工程硕士和博士学位。他的研究兴趣包括机器学习、数据挖掘和信号处理，特别是在时间序列人工智能（AI4TS）、教育人工智能（AI4EDU）、决策智能、大语言模型和生成式AI方面。他在顶级AI会议和期刊上发表了100多篇论文，并在NeurIPS、ICML和ICLR等会议上多次获得Oral/Spotlight Papers，在IJCAI会议上多次获得最具影响力论文奖，在AAAI会议上多次获得IAAI应用奖，并在ICASSP大会上获得信号处理大奖赛冠军等。',
            '-目前，他担任多个AI Workshop的组织者或联合主席，包括KDD、ICDM、SDM、AAAI和IJCAI上的时间序列人工智能（AI4TS），以及KDD和CAI上的教育人工智能（AI4EDU）Workshop。',
            '-此外，他还担任《Neurocomputing》杂志的副编辑、《IEEE Signal Processing Letters》杂志的副编辑、《Applied Energy》杂志的客座编辑和《IEEE Internet of Things Journal》杂志的客座编辑。同时，他还经常担任NeurIPS、KDD 、ICASSP等AI会议的领域主席。']},
      ]
    };
  }
}
</script>
