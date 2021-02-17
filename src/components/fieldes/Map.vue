<template>
  <div>
    <label>Your location</label>
		<input type="text" name="lat" v-model="mapCoordinates.lat" />
		<input type="text" name="lng" v-model="mapCoordinates.lng" />

    <GmapMap
      :center="myCoordinates"
      :zoom="zoom"
      ref="mapRef"
      @dragend="handleDrag"
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
    // does the user have a saved center? use it instead of the default
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.myCoordinates = coordinates;
        })
        .catch((error) => alert(error));
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    handleDrag() {
      // get center and zoom level, store in localstorage
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
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

input {
	display: none;
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
