<template>
  <v-footer light class="d-block pa-0" style="background: white">
    <v-container class="py-13">
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="5">
              <h1 class="text-base font-weight-bold ov mb-4">{{ $t('footer.col1.title') }}</h1>
              <p class="ov text-sm mb-1 opacity-60">{{ $t('footer.col1.OfficePhone') }} : 1 599 510 510</p>
              <p class="ov text-sm mb-1 opacity-60">{{ $t('footer.col1.fax') }} : 08-9435792</p>
              <p class="ov text-sm mb-1 opacity-60">service@MeirCohen.com</p>
            </v-col>
            <v-col cols="12" md="5">
              <h1 class="text-base font-weight-bold ov mb-4">{{ $t('footer.col2.title') }}</h1>
              <h1 class="text-base font-weight-bold ov mb-2">{{ $t('footer.col2.p1') }}</h1>
              <h1 class="text-base font-weight-bold ov mb-0">{{ $t('footer.col2.p2') }}</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.about') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.privacy') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.delivery') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.declaration') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.terms') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm mb-4 opacity-60">
            {{ $t('footer.col3.contactUs') }}
          </a>
          <a target="_blank" href="/" class="ov black--text d-block text-sm opacity-60">
            {{ $t('footer.col3.branchList') }}
          </a>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="border-t pa-4 border-zinc-700 text-center caption opacity-90" style="direction: ltr">
      &copy; 2019 CREATED BY <b>EcommerceFactory</b>
    </div> -->
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
