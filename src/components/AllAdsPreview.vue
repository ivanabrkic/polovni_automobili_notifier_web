<template>
  <div>
    <AdsFilters @apply-filters="applyFilters" />
    <div class="q-pa-md">
      <q-table
        :table-style="{ width: '70vw' }"
        @row-click="goTo"
        :rows="filteredAds"
        :columns="columns"
        row-key="adId"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                size="sm"
                color="cyan-8"
                round
                dense
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'expand_less' : 'expand_more'"
              />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <template v-if="col.name === 'url'">
                <q-btn
                  @click="goTo(props.row.url)"
                  flat
                  round
                  size="14px"
                  color="cyan-8"
                  icon="launch"
                />
              </template>
              <template v-else>
                {{ col.value }}
              </template>
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div
                class="fit row wrap justify-evenly items-center content-center"
              >
                <div class="q-pa-lg col-6">
                  <p>Gorivo: {{ props.row.fuelType }}</p>
                  <p>
                    Snaga motora: {{ props.row.power }}/{{
                      props.row.horsePower
                    }}
                    (kW/KS)
                  </p>
                  <p>Broj vrata: {{ props.row.doornum }}</p>
                  <p>Menjač: {{ props.row.gearBox }}</p>
                </div>
                <div class="col-2">
                  <q-img
                    alt="no image"
                    :src="props.row.image"
                    spinner-color="white"
                    style="height: 140px; max-width: 150px"
                  />
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAds } from 'src/services/AdsService';
import { Ad } from './models';
import AdsFilters from 'components/AdsFilters.vue';

const columns = [
  {
    name: 'title',
    label: 'Ime',
    field: 'title',
    sortable: true,
    align: 'left',
  },
  {
    name: 'city',
    label: 'Grad',
    field: 'city',
    sortable: true,
    align: 'left',
  },
  {
    name: 'year',
    label: 'Godina',
    field: 'year',
    sortable: true,
    align: 'left',
    sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'mileage',
    label: 'Kilometraža (km)',
    field: 'mileage',
    sortable: true,
    align: 'left',
    sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'price',
    label: 'Cena (EUR)',
    sortable: true,
    align: 'left',
    field: 'price',
    format: (value: number) =>
      value === 999999999 ? 'Na zahtev' : `${value}`,
    sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'url',
    label: 'Link',
    field: 'url',
    align: 'center',
  },
];

export default defineComponent({
  name: 'AllAdsPreview',
  components: { AdsFilters },
  setup() {
    const allAds = ref<Ad[]>([]);
    const filteredAds = ref<Ad[]>([]);

    const setAds = async () => {
      allAds.value = await getAds();
      filteredAds.value = allAds.value;
    };

    const goTo = (url: string) => {
      window.open(url, '_blank').focus();
    };

    setAds();

    const applyFilters = (params: Ad) => {
      filteredAds.value = allAds.value.filter((ad, index) => {
        let brandPass = params.brand ? ad.brand === params.brand : true;
        let modelPass = params.model ? ad.model === params.model : true;
        let mileagePass = params.mileage ? ad.mileage <= params.mileage : true;
        let pricePass = params.price ? ad.price <= params.price : true;
        let powerPass = params.power ? ad.power <= params.power : true;
        let gearBoxPass = params.gearBox ? ad.gearBox === params.gearBox : true;
        let yearPass = params.year ? ad.year >= params.year : true;
        let doornumPass = params.doornum ? ad.doornum === params.doornum : true;
        let fuelTypePass = params.fuelType
          ? ad.fuelType === params.fuelType
          : true;

        return (
          brandPass &&
          modelPass &&
          mileagePass &&
          pricePass &&
          powerPass &&
          gearBoxPass &&
          yearPass &&
          doornumPass &&
          fuelTypePass
        );
      });
    };

    return { allAds, columns, goTo, applyFilters, filteredAds };
  },
});
</script>
