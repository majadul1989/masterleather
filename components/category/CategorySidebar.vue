<template>
    <div class="sidebar-parent">
        <accordion :accordionRequest="filterKey == 'sorting'" accordion_container="key_sorting">
            <template v-slot:header>
                  <a href="javascript:void(0)">Sort By</a>
            </template>
            <template v-slot:content>
              <div id="SEC_filter-sort" class="accordion__content" aria-labelledby="filter-sort" role="region">
                  <div>
                    <label v-for="(sort,key) in sortBy" :key="key" class="radio-button">
                      <span class="radio-button__text">{{sort.label}}</span>
                      <div class="radio radio--subtle"><input @change="radioFilter($event)" type="radio" name="sort_by" id="radio" text="" :value="sort.value"><span class="radio__symbol"></span></div>
                    </label>
                  </div>
                </div>
            </template>
        </accordion>

        <accordion :accordionRequest="filterKey == 'price_range'" accordion_container="key_price_range">
              <template v-slot:header>
                   <a href="javascript:void(0)">Price Range</a>
             </template>
             <template v-slot:content>
                <div class="track-container">
                    <span class="range-value min">{{ min}} </span> <span class="range-value max">{{ max }}</span>
                    <div class="track" ref="_vpcTrack"></div>
                    <div class="track-highlight" ref="trackHighlight"></div>
                    <button class="track-btn track1" id="track1" ref="track1"></button>
                    <button class="track-btn track2" ref="track2"></button>
                    <div class="input-group">
                      <input type="number" @change="priceRangeFilter" class="form-control" v-model="minValue"/>
                    </div>
                    <div class="input-group">
                      <input type="number" @change="priceRangeFilter" class="form-control" v-model="maxValue"/>
                    </div>
                </div>
            </template>
        </accordion>
        <accordion v-if="sub_categories && sub_categories.length > 0">
          <template v-slot:header>
            <a href="javascript:void(0)">Categories</a>
          </template>
          <template v-slot:content>
            <div>
              <div id="SEC_filter-CATEGORIES" class="accordion__content" aria-labelledby="filter-CATEGORIES" role="region">
                <label v-for="(sub_cat,key) in sub_categories" :key="key" class="checkbox__wrapper checkbox__wrapper--39130">
                    <span class="checkbox__texts"><span class="checkbox__label">{{sub_cat.name}}</span></span>
                    <div class="checkbox--subtle checkbox"><input type="checkbox" name="category" @change="checkFilter($event)" :value="sub_cat.id"><span class="checkbox__symbol"></span></div>
                </label>
              </div>
            </div>
          </template>
        </accordion>

        <accordion v-for="(filat,key) in filter_att" :key="key" :accordionRequest="filat.field_label == filterKey" :accordion_container="'key_'+filat.field_label">
          <template v-slot:header>
            <a href="javascript:void(0)">{{filat.field_label}}</a>
          </template>
          <template v-slot:content>
              <div>
                <div id="SEC_filter-CATEGORIES" class="accordion__content" aria-labelledby="filter-CATEGORIES" role="region">
                  <label v-for="(filter,key) in filat.filters" :key="key" class="checkbox__wrapper checkbox__wrapper--39130">
                      <span class="checkbox__texts"><span class="checkbox__label">{{filter}}</span></span>
                      <div class="checkbox--subtle checkbox"><input type="checkbox" @change="checkFilter($event)" :name="filat.field_label" :value="filter"><span class="checkbox__symbol"></span></div>
                  </label>
                </div>
              </div>
          </template>
        </accordion>
        <div style="height:1000px;"></div>
    </div>
</template>

<script>
import Accordion from '../common/Accordion.vue';
export default {
  components: { Accordion },
  props: {
    filterKey: {
      default: null
    }
  },
   data(){
       return {
        sub_categories: [],
        filter_att: [],
        min: 0,
        max: 200000,
        minValue: 0,
        maxValue: 200000,
        step: 5,
        totalSteps: 0,
        percentPerStep: 1,
        trackWidth: null,
        isDragging: false,
        pos: {
            curTrack: null
        },
        sortBy: [
          {label: 'Default',value: ''},
          {label: 'Name (A - Z)',value: 'title_asc'},
          {label: 'Name (Z - A)',value: 'title_desc'},
          {label: 'Price: low to high',value: 'price_asc'},
          {label: 'Price: high to low',value: 'price_desc'},
          {label: 'Newest',value: 'date_desc'},
        ]
       }
   },
    methods: {
        moveTrack(track, ev){

      let percentInPx = this.getPercentInPx();
      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX-trackX;

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if(moveInPct<1 || moveInPct>100) return;
      let value = ( Math.round(moveInPct / this.percentPerStep) * this.step ) + this.min;
      if(track==='track1'){
        if(value >= (this.maxValue - this.step)) return;
        this.minValue = value;
      }

      if(track==='track2'){
        if(value <= (this.minValue + this.step)) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight()

    },
    mousedown(ev, track){

      if(this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track){
      this.mousedown(ev, track)
    },

    mouseup(ev, track){
      if(!this.isDragging) return;
      this.isDragging = false
    },

    touchend(ev, track){
      this.mouseup(ev, track)
    },

    mousemove(ev, track){
      if(!this.isDragging) return;
      this.moveTrack(track, ev)
    },

    touchmove(ev, track){
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value){
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight(){
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + '%'
      this.$refs.trackHighlight.style.width = (this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue)) + '%'
    },

    getPercentInPx(){
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev){
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if(ev.clientX < track1Left){
        this.moveTrack('track1', ev)
      }else if((ev.clientX - track1Left) < (track2Left - ev.clientX) ){
        this.moveTrack('track1', ev)
      }else{
        this.moveTrack('track2', ev)
      }
    },

    checkFilter(event){
      //console.log(event.target.checked,event.target.value,event.target.name)
      let   name = "filterby_"+event.target.name.toLowerCase(),
            existingQuery = this.$route.query[name],
            existingQueryRR = existingQuery ? existingQuery.split('|') : [];

            if(event.target.checked && !existingQueryRR.includes(event.target.value)){
                existingQueryRR.push(event.target.value)
            }else if(existingQueryRR.includes(event.target.value)){
              existingQueryRR = existingQueryRR.filter(function(item){

                return item != event.target.value
              })
            }

      let newQuery = {};
      if(existingQueryRR.length > 0){
        if(newQuery['time']){
            delete newQuery['time'];
        }

        newQuery[name] = existingQueryRR.join('|')
      }else{
        delete this.$route.query[name]
        newQuery['time'] = new Date().getTime()
      }

      const getQuery = {
        ...this.$route.query,
        ...newQuery
      }

      this.$router.push({
        path: '/c/'+this.$route.params.slug,
        query: getQuery
      })


    },

    radioFilter(event){

      const name = event.target.name,
            value = event.target.value;

      let newQuery = {}
      if(value != ''){
        newQuery[name] = value
      }else {
        delete this.$route.query[name]
        //console.log('default')
      }

      const getQuery = {
        ...this.$route.query,
        ...newQuery
      }
      //console.log(getQuery)

      this.$router.push({
        path: '/c/'+this.$route.params.slug,
        query: getQuery
      })


    },

    priceRangeFilter(){

      let newQuery = {
        price_min: this.minValue,
        price_max: this.maxValue
      }

      const getQuery = {
        ...this.$route.query,
        ...newQuery
      }

      this.$router.push({
        path: '/c/'+this.$route.params.slug,
        query: getQuery
      })

    }



    },
    mounted(){
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

	// set track1 initilal
	//console.log(document.getElementById("track1"))
    document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'
    // track2 initial position
    document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'
    // set initila track highlight
    this.setTrackHightlight()

    var self = this;

    ['mouseup', 'mousemove'].forEach( type => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if(self.isDragging && self.pos.curTrack){
          self[type](ev, self.pos.curTrack)
        }
      })
    });

    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach( type => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)

    })

    document.querySelector('.track-highlight').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)

    })
    },

    watch:{
      filterKey: {
        handler(){
          //console.log(this.filterKey)
          const ele = document.getElementsByClassName('key_'+this.filterKey)
          const runScroll = ele.length > 0?ele[0].scrollIntoView(true): null

        }
      },

      minValue: {
        handler(){
          this.priceRangeFilter()
        }
      },
      maxValue: {
        handler(){
          this.priceRangeFilter()
        }
      }
    },

   async created(){
        await this.$store.dispatch('category/fetchFilters',{
            seo_url: this.$route.params.slug,
            ...this.$route.query
      })

      this.sub_categories = this.$store.state.category.FILTERS.filters_cat.sub_menu
      this.filter_att = this.$store.state.category.FILTERS.filters_att.map((item) => {
        const filt = item.default_value.split("|")

        const filtV = filt.map((itemX) => {
          const filtX = itemX.split(":")
          return filtX[1]
        })

        item['filters'] = filtV

        return item;
      })

      this.maxValue = this.$route.query.price_max?this.$route.query.price_max:200000;
      this.minValue = this.$route.query.price_min?this.$route.query.price_min:0

      //console.log(this.filter_att)

    }
}
</script>

<style>

	/* sidebar */

.track-container {
    margin:15px 35px 0
}

.range-value{
    position: absolute;
    top: -2rem;
  }
  .range-value.min{
    left: 0;
  }

  .range-value.max{
    right: 0;
  }
  .track-container{
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }

  .track,
  .track-highlight {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.3rem;
  }
  .track-container .input-group{
    float: left;
    width: 50%;
    margin-top:30px;
    padding-left: 15px;
  }

  .track{
    background-color: #ddd;
  }

  .track-highlight{
    background-color: black;
    z-index: 2;

  }

  .track-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1rem;
    height: 1rem;
    top: calc(-50% - 0.10rem);
    margin-left: -1rem;
    border: none;
    background-color: black;
    touch-action: pan-x;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
  }
  .right-sideNav-menu {
    padding: 2rem 3rem;
    margin-top: 60px;
  }

  .radio-button {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    cursor: pointer;
  }
  .radio-button__text {
    font-size: .875rem;
  }

</style>
