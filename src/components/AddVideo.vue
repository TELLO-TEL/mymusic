<template>

<div>
    <form>

         <h1>Add Videos </h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text"  v-model="music.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">

  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">Artist</label>
    <input type="text" v-model="music.artist" class="form-control" id="exampleInputPassword1" placeholder="https:exmpple.com">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Url</label>
    <input type="url" v-model="music.url" class="form-control" id="exampleInputPassword1" placeholder="https:exmpple.com">
  </div>
  <button type="submit" @click="submit" class="btn btn-primary">Submit</button>
</form>

</div>
</template>

<script>

import axios from  'axios'
export default {

        data (){
            return {
                music:{
                    name:'',
                    artist:'',
                    url:''
                }
            }
        } ,


        methods:{
            submitt(){
                let data  ={
                    name: this.music.name,
                    artist:this.music.artist,
                    url:this.music.url
                }

                axios.post('http://localhost:3000/addMusic' ,{data})
                     .then(console.log('we did it'))
                     .catch(err=>console.log(err.message))
                     
            }
        }


}
</script>

<style>

@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>
