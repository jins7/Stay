<template>
  <section>

    <div class="container h-100 d-flex flex-column ">
      <div class="row text-left mb-5">
        <div class="col-12 px-sm-5 text-center">
          <div class="display-2 my-5 fw-normal ">
            Agent Tools
          </div>
          <div class="display-9 text-secondary">
            Effortlessly integrate autonomous AI agents and LLMs into your workflows<br/>
            to supercharge productivity and streamline operations.<br/>
            Leverage the power of AI with seamless connections to native tools,<br/>
            from system utilities to SaaS applications.
          </div>
        </div>
      </div>
    </div>

    <img src="../assets/image/poster/tools.jpg" class="img-fluid rounded-3 img-w-100" alt="...">

    <div class="container mb-5">
      <div class="row">
        <div v-for="feature in features" class="col-12 col-sm-6 col-lg-4 py-2 py-sm-3">
          <div class="card"  style="height: 220px">
            <div class="card-body">
              <div class="d-flex align-items-center py-3">
                <img :src="feature.logo" width="50" height="50" class="m-2 rounded-2" alt="">
                <div class="m-2 h4">
                  {{ feature.name }}
                </div>
              </div>
              <div class="px-2 h6 text-secondary lh-base fw-light">
                {{ feature.intro }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          logo: new URL('@/assets/image/tools/fetch.png', import.meta.url).href,
          name: "Fetch",
          intro: "Web content fetching and conversion for efficient LLM usage"
        },
        {
          logo: new URL('@/assets/image/tools/chatsum.png', import.meta.url).href,
          name: "ChatSum",
          intro: "Query and Summarize your chat messages."
        },
        {
          logo: new URL('@/assets/image/tools/aws.png', import.meta.url).href,
          name: "Amazon",
          intro: "Perform operations on your AWS resources using an LLM"
        },
        {
          logo: new URL('@/assets/image/tools/apple.png', import.meta.url).href,
          name: "Apple App Store",
          intro: "Streamlining app management, simplifying updates, and providing real time insights."
        },
        {
          logo: new URL('@/assets/image/tools/adobe.png', import.meta.url).href,
          name: "Adobe PDF",
          intro: "Streamline your document management with Adobe's advanced PDF tools."
        },
        {
          logo: new URL('@/assets/image/tools/github.png', import.meta.url).href,
          name: "Github",
          intro: "Repository management, file operations, and GitHub API integration"
        },
        {
          logo: new URL('@/assets/image/tools/google-map.png', import.meta.url).href,
          name: "Google Maps",
          intro: "Location services, directions, and place details"
        },
        {
          logo: new URL('@/assets/image/tools/google-drive.png', import.meta.url).href,
          name: "Google Drive",
          intro: "Repository management, file operations, and GitHub API integration"
        },
        {
          logo: new URL('@/assets/image/tools/google-analytics.png', import.meta.url).href,
          name: "Google Analytics",
          intro: "Monitor website traffic and capture in depth insights to elevate your business strategies."
        },
        {
          logo: new URL('@/assets/image/tools/google-calendar.png', import.meta.url).href,
          name: "Google Calendar",
          intro: "Effortlessly manage schedules with Google Calendar integration."
        },
        {
          logo: new URL('@/assets/image/tools/google-search.png', import.meta.url).href,
          name: "Google Search",
          intro: "Harness valuable insights to elevate your research and marketing."
        },
        {
          logo: new URL('@/assets/image/tools/google-trends.png', import.meta.url).href,
          name: "Google Trends",
          intro: "Unlocking search trends, Google Trends offers critical insights to tailor your strategies."
        },
        {
          logo: new URL('@/assets/image/tools/micro-excel.png', import.meta.url).href,
          name: "Microsoft Excel",
          intro: "Enhancing data analysis and visualization with ease."
        },
        {
          logo: new URL('@/assets/image/tools/micro-word.png', import.meta.url).href,
          name: "Microsoft Word",
          intro: "Elevate your document creation with Microsoft Word's intuitive and robust features."
        },
        {
          logo: new URL('@/assets/image/tools/micro-onedrive.png', import.meta.url).href,
          name: "Microsoft OneDrive",
          intro: "Empower seamless data access and collaboration with Microsoft OneDrive."
        },
        {
          logo: new URL('@/assets/image/tools/micro-teams.png', import.meta.url).href,
          name: "Microsoft Teams",
          intro: "Empowering streamlined communication and collaboration for enhanced productivity."
        },
        {
          logo: new URL('@/assets/image/tools/mysql.png', import.meta.url).href,
          name: "Mysql",
          intro: "MySQL database integration with configurable access controls and schema inspection"
        },
        {
          logo: new URL('@/assets/image/tools/slack.png', import.meta.url).href,
          name: "Slack",
          intro: "Channel management and messaging capabilities"
        },
        {
          logo: new URL('@/assets/image/tools/discord.png', import.meta.url).href,
          name: "Discord",
          intro: "Empowering seamless communication, Discord unites people through voice, video, and text."
        },
        {
          logo: new URL('@/assets/image/tools/facebook.png', import.meta.url).href,
          name: "Facebook",
          intro: "Enhance social media marketing by streamlining Facebook post management."
        },
        {
          logo: new URL('@/assets/image/tools/figma.png', import.meta.url).href,
          name: "Figma",
          intro: "Elevate your design process by seamlessly creating, prototyping, and collaborating in real time with Figma."
        },
        {
          logo: new URL('@/assets/image/tools/filesystem.png', import.meta.url).href,
          name: "Filesystem",
          intro: "Secure file operations with configurable access controls"
        },
        {
          logo: new URL('@/assets/image/tools/gmail.png', import.meta.url).href,
          name: "Gmail",
          intro: "Streamline email management with Gmail's advanced search and customizable filters."
        },
        {
          logo: new URL('@/assets/image/tools/notion.png', import.meta.url).href,
          name: "Notion",
          intro: "Streamline document management and collaboration with Notion."
        },
        {
          logo: new URL('@/assets/image/tools/reddit.png', import.meta.url).href,
          name: "Reddit",
          intro: "Harness Reddit's vast user base to enhance personalized campaigns and drive community engagement."
        },
        {
          logo: new URL('@/assets/image/tools/telegram.png', import.meta.url).href,
          name: "Telegram",
          intro: "Empower seamless communication with your audience through real time updates and interactions."
        },
        {
          logo: new URL('@/assets/image/tools/tiktok.png', import.meta.url).href,
          name: "Tiktok",
          intro: "Elevate your TikTok strategy with seamless content creation, scheduling, and detailed performance analytics."
        },
        {
          logo: new URL('@/assets/image/tools/x.png', import.meta.url).href,
          name: "Twitter",
          intro: "Streamline your tweet scheduling and management with our Twitter integration."
        },
        {
          logo: new URL('@/assets/image/tools/youtube.png', import.meta.url).href,
          name: "YouTube",
          intro: "Enhance user engagement by effortlessly embedding YouTube videos on your site."
        },
        {
          logo: new URL('@/assets/image/tools/Calendly.png', import.meta.url).href,
          name: "Calendly",
          intro: "Streamlining appointment bookings and meetings for enhanced productivity."
        },
      ],
    }
  }
}
</script>