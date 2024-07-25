<template>
    <div>
        <HeaderComponent />
            <router-view></router-view>
        <FooterComponent />
        
    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue";


 export default {
  components: {
    FooterComponent,
    HeaderComponent
  }
};
</script>
<style scoped></style>