<template>
  <div v-animate class="address mb-5">
    <!-- <p class="name anim fadeInLeft" v-html="place"></p> -->
    <div class="icon_info d-flex align-start">
      <svg class="svg-icon anim fadeIn delay-400" fill="#454647" viewBox="0 0 20 20">
        <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"/>
      </svg>
      <p class="d-inline-block mb-1 anim fadeInLeft delay-100">
        <slot></slot>
      </p>
    </div>
    <div class="icon_info d-flex align-start">
      <svg class="svg-icon anim fadeIn delay-400" fill="#454647" viewBox="0 0 20 20">
        <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"/>
      </svg>
      <a href="javascript:;" class="d-inline-block anim fadeInLeft delay-300">{{ phone }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddresItem',
  props: {
    // s
    location: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  .name {
    font-size: 1.1em;
    font-weight: normal;
    line-height: 1.2;
    color: #fcfcfc;
  }
  p {
    color: $text-color;
  }
  .icon_info {
    svg {
      width: 1.5em;
      margin-right: 1em;
    }
    a {
      text-decoration: none;
      color: $text-color;
    }
  }
}
</style>
