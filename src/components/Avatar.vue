<template>
    <div v-if="data.type === 'member'" class="col-12 col-sm-6 col-lg-4 py-3 py-sm-4">
      <div class="card card-hover">
        <div class="row justify-content-center p-3">
          <div class="avatar-hover">
            <img :src="data.avatar" class="img-fluid rounded-1" alt="...">
          </div>
        </div>
        <div class="card-body">
          <div class="text-center pb-3">
            <div class="h4 fw-normal">
              {{ data.name }}
            </div>
          </div>
          <div class="text-center py-1">
            <div class="h5 fw-light pb-2">{{ data.title }}</div>
          </div>
          <div class="text-center py-1">
            <div v-for="item in data.intro" class="pb-2 h6 fw-light">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="data.type === 'expert'" class="col-12 col-lg-6 pb-4 py-4">
      <div class="card card-hover">
        <div class="row justify-content-center p-4">
          <div class="col-sm-10 col-md-8 col-lg-12 col-xl-8 avatar-hover">
            <img :src="data.avatar" class="img-fluid rounded-3" alt="...">
          </div>
        </div>
        <div class="card-body">
          <div class="text-center pb-3">
<!--            <div class="h4 fw-normal">-->
              <a class="h4 fw-normal text-center" :href="data.website">
                {{ data.name }}
              </a>
<!--            </div>-->
          </div>
          <div class="text-center py-1">
            <div class="h4 fw-light pb-2">{{ data.title }}</div>
          </div>
          <div class="text-center py-1">
            <div class="h5 fw-light">{{ data.research }}</div>
          </div>
<!--          <a class="text-center" href="{{data.website}}">-->
<!--            <div class="h5 m-2 m-sm-3 fw-normal">{{ data.email }}</div>-->
<!--          </a>-->
          <div class=" py-1 mt-4">
            <div v-for="item in data.intro" class="pb-2 h6 fw-light lh-base">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Avatar',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
};
</script>

<style>
.avatar-hover{
  transition: transform 0.3s linear;
}

.avatar-hover:hover {
  transform: scale(1.05);
}

.card-hover {
  transition: transform 0.3s ease-in-out;
}

.card-hover:hover {
  transform: scale(1.05);
}
</style>