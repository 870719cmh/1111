<template>
  <div>
    <sidebar></sidebar>
      <company></company>
      <type></type>
      <outlet></outlet>
  </div>
</template>

<script>
import company from "@/components/AbnormalAlarm/company";
import type from "@/components/AbnormalAlarm/type";
import outlet from "@/components/AbnormalAlarm/outlet";
import sidebar from "@/components/Adevice/Sidebar";
export default {
    components: {
            sidebar,
     company,   
     type,
      outlet,

  },

}
</script>

<style>

</style>