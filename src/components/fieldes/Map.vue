<template>
  <div>
    <label>Your location</label>
    <input type="hidden" name="lat" v-model="mapCoordinates.lat" />
    <input type="hidden" name="lng" v-model="mapCoordinates.lng" />
    {{ mapCoordinates.lat }}
    <GmapMap
      :center="myCoordinates"
      :zoom="zoom"
      ref="mapRef"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 20,
    };
  },
  created() {
    // get user's coordinates from browser request
    this.$getLocation({})
      .then((coordinates) => {
        this.myCoordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapCoordinates() {
      if (this.map) {
        return {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng(),
        };
      } else {
        return {
          lat: 0,
          lng: 0,
        };
      }
    },
  },
};
</script>

<style scoped>
label {
  display: block;
}
.map {
  position: relative;
  margin: 10px 0;
}

.vue-map-container,
.pointer {
  width: 100%;
  height: 150px;
  z-index: 1;
}
.pointer {
  z-index: 2;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  clip-path: url("#pointer");
}
</style>
