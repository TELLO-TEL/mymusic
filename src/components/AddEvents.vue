<template>

<div>
    <form>

         <h1>Events</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Place-name</label>
    <input type="text"  v-model="place.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="place name">

  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">Date</label>
    <input type="date" v-model="place.date" class="form-control" id="exampleInputPassword1" placeholder="date">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Time</label>
    <input type="time" v-model="place.time" class="form-control" id="exampleInputPassword1" placeholder="time">
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
                place:{
                    name:'',
                    date:'',
                    time:''
                }
            }
        } ,


        methods:{
            submitt(){
                let data  ={
                    name: this.place.name,
                    date:this.place.date,
                    time:this.place.time
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
