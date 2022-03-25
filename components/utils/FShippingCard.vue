<template>
  <v-item-group class="mt-4" mandatory>
    <v-item v-slot="{ active, toggle }">
      <v-card flat @click="toggle" tile :class="{ 'opacity-60': !active }" class="select-none">
        <div class="w-full h-full" :class="{ 'bg-black bg-opacity-10': active }">
          <v-card-text class="d-flex align-center py-3">
            <div class="d-flex align-center">
              <svg class="ms-1 me-4 dd" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8125 21.625C22.3658 21.625 23.625 20.3658 23.625 18.8125C23.625 17.2592 22.3658 16 20.8125 16C19.2592 16 18 17.2592 18 18.8125C18 20.3658 19.2592 21.625 20.8125 21.625Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.1875 21.625C7.7408 21.625 9 20.3658 9 18.8125C9 17.2592 7.7408 16 6.1875 16C4.6342 16 3.375 17.2592 3.375 18.8125C3.375 20.3658 4.6342 21.625 6.1875 21.625Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 7H22.5L25.875 10.375V16H18V7Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 1.375H1.125V16H18V1.375Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <b class="text-base mb-1 text-capitalize">
                  {{ $t('checkout.door_step_delivery') }}
                </b>
                <div class="caption text-capitalize">
                  {{ $t('checkout.deliver_my_order_to_my_door_step') }}
                </div>
              </div>
            </div>
            <v-spacer />
            <div class="d-flex flex-column align-end" v-if="active">
              <v-icon size="19">{{ mdiCheckCircle }}</v-icon>
              <b style="white-space: nowrap"> {{ totalPrice }} ₪ </b>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-item>
    <v-item v-slot="{ active, toggle }">
      <v-card flat @click="toggle" tile :class="{ 'opacity-60': !active }" class="select-none mt-1">
        <div class="w-full h-full" :class="{ 'bg-black bg-opacity-10': active }">
          <v-card-text class="d-flex align-center py-3">
            <div class="d-flex align-center">
              <svg class="ms-1 me-4 dd" width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.125 11.1256C14.125 9.39905 12.726 8 11.0006 8C9.27405 8 7.875 9.39905 7.875 11.1256C7.875 12.851 9.27405 14.25 11.0006 14.25C12.726 14.25 14.125 12.851 14.125 11.1256Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9994 24.25C9.50129 24.25 1.625 17.873 1.625 11.2041C1.625 5.9833 5.82138 1.75 10.9994 1.75C16.1774 1.75 20.375 5.9833 20.375 11.2041C20.375 17.873 12.4975 24.25 10.9994 24.25Z"
                  stroke="#091B27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div>
                <b class="text-base mb-1 text-capitalize">
                  {{ $t('checkout.pick_up') }}
                </b>
                <div class="caption text-capitalize">
                  {{ $t('checkout.i_will_pick_up_my_order_from_a_pick_up_location') }}
                </div>
              </div>
            </div>
            <v-spacer />
            <div class="d-flex flex-column align-end" v-if="active">
              <v-icon size="19">{{ mdiCheckCircle }}</v-icon>
              <b style="white-space: nowrap"> {{ totalPrice }} ₪ </b>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-item>
  </v-item-group>
</template>

<script>
import { mdiCheckCircle } from '@mdi/js'
export default {
  props: {
    totalPrice: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      mdiCheckCircle
    }
  }
}
</script>

<style lang="scss" scoped></style>
