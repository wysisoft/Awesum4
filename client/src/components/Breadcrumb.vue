<script lang="ts">
import { ref } from 'vue'
import { resources } from '@/resources/Resources';
import type { ClientDatabaseItem } from '@/clientClasses/DatabaseItem';
import type { ClientDatabaseUnit } from '@/clientClasses/DatabaseUnit';
import type { ClientDatabase } from '@/clientClasses/Database';
import type { ClientApp } from '@/clientClasses/App';

export default {
    setup() {
        return {
        }
    }
}
</script>

<template>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb" ref="breadcrumb">
            <li class="breadcrumb-item" v-for="item in $awesum.breadcrumb" :key="item.name"><button class="btn btn-link"
                    @click="$router.push(item.url)"><span>{{ item.name }}</span></button></li>
        </ol>
    </nav>
</template>
<style lang="scss" scoped>

.breadcrumb{
    padding:0;
    font-size:1.8svmin;
    margin-left:.5svmin;
}

nav{
    position: relative;
    top: -.5svmin;
}

li.breadcrumb-item button {
    padding: 0;
    color: inherit;
    text-decoration: none;
    font-size: 2svmin;
}

li.breadcrumb-item+li.breadcrumb-item {
    padding-left: .5svmin;
}

li.breadcrumb-item+li.breadcrumb-item::before {
    padding-right: .5svmin;
    padding-top: .4svmin;
}
</style>