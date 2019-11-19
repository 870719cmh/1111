<template>
  <div id="bnormalAlarm">
  <div id="top">
    <company/>
    <date/> 
    <type/>
    <outlet/>
  </div> 
   <detail/>

  </div>
</template>

<script>

import company from "@/components/AbnormalAlarm/company";
import date from "@/components/AbnormalAlarm/date";
import type from "@/components/AbnormalAlarm/type";
import outlet from "@/components/AbnormalAlarm/outlet";
import detail from "@/components/AbnormalAlarm/detail";

export default { 
  components: {
     company,
     date,   
     type,
      outlet,
      detail
  },
}
</script>

<style scoped>
#bnormalAlarm{
    flex-direction: column;
    background:rgb(247, 243, 243);

}
#top{
  display:flex;
}
#top>*{
  width:25%
}
</style>