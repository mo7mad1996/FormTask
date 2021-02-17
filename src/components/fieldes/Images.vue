<template>
  <div>
    <label>add Images</label>
    <div class="imgs">
      <ul>
        <li v-for="(img, ndx) in all" :key="ndx">
          <img v-if="img.url" :src="img.url" :alt="img.alt" />
          <label v-else :for="'file' + img.id" ><i class="fas fa-plus"></i></label>
          <button v-if="img.url" @click="images.splice(ndx, 1)">
            <i class="far fa-times-circle"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            :id="'file' + img.id"
            :name="ndx < images.length ? 'img' + ndx: null"
            @change="upload"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  computed: {
    all() {
      return [
        ...this.images,
        {
          url: "",
          alt: "aasd",
          id: "sd",
        },
      ];
    },
  },
  methods: {
    upload(e) {
      let input = e.target,
        that = this;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(input.files[0]);

        reader.onload = function(e) {
          that.images.push({
            url: e.target.result,
            alt: "altText",
            id: Math.random(),
          });
        };
      }
    },
  },
};
</script>

<style scoped>
.imgs {
  border: 1px solid #333 ;
}

ul {
  display: flex;
  gap: 3px 3px;
  align-items: center;
  flex-wrap: wrap;
}
li {
  width: 70px;
  height: 70px;
  position: relative;
}
li button {
  position: absolute;
  top: 5px;
  right: 5px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
}
li button:hover {
  background: rgba(255, 255, 255, 0.6);
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
[type="file"] {
  display: none;
}

label[for] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #27ae60;
  color: white;
}
label[for]:hover,  
label[for]:focus  {
  filter: brightness(120%);
}
</style>
