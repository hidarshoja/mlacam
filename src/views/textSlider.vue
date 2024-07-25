<template>
    <div>
      <div class="parent">
        <div class="div2">
          <div class="slider3" style="width: 150px">
            <input
             class="inputRange"
              type="range"
              min="0"
              max="1000000"
              v-model="sliderValue2"
              @input="updateRangeValue2"
             
            />
            
          </div>
          <p id="rangeValue" class="px-2">حداقل : {{ sliderValue }} ت </p>
         
          <div
            class="slider4"
            style="width: 75px"
          >
            <input
             class="inputRange"
              type="range"
              min="0"
              max="2000"
              v-model="sliderValue"
              @input="updateRangeValue"
            
            />
          
          </div>
          <p id="rangeValue">حداکثر : {{ sliderValue2 }} ت </p>
        </div>
      </div>    
     <div>
      <sliderTwoComponent />
     </div>
        
   
    </div>
  </template>
  <script>
  import sliderTwoComponent from '@/components/sliderTwoComponent.vue';
  export default {
    components :{
      sliderTwoComponent
    },
    data() {
      return {
        sliderValue: 0,
        halfMaxValue: 0,
        sliderValue2: 2000,
        halfMaxValue2: 2000,
      };
    },
    methods: {
      updateRangeValue() {
        if (parseInt(this.sliderValue) < this.halfMaxValue) {
          this.sliderValue = this.halfMaxValue;
        }
      },
      updateRangeValue2() {
        if (parseInt(this.sliderValue2) < this.halfMaxValue2) {
          this.sliderValue2 = this.halfMaxValue2;
        }
      },
    },
  };
  </script>
  <style scoped>
  .parent {
    width: 100%;
  }
  .div2 {
    margin: 100px auto;
    position: relative;
    width: 225px;
    height: 5px;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .slider3{
    position: absolute;
    left: 0px;
  }
  
  .slider4{
    position: absolute;
    right: 0;
  }
  input[type="range"].inputRange {
   
    -webkit-appearance: none;
    -moz-apperance: none;
    appearance: none;
  
    
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      var(--slider-value),
      #ccc var(--slider-value),
      #ccc
    );
    border-radius: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  
  input[type="range"].inputRange:hover {
    opacity: 1;
  }
  </style>
  