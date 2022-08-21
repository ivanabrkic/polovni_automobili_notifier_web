<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-lg">
      <div class="row">
        <div class="col-4">
          <q-select
            label="Marka"
            :options="defaultBrandOptions"
            :model-value="brand"
            @update:model-value="updateModelValue"
            clearable
          />
          <q-select
            label="Model"
            :options="brand ? brand.models : []"
            v-model="model"
            clearable
          />
          <q-select
            label="Menjac"
            :options="gearBoxOptions"
            v-model="gearBox"
            clearable
          />
          <q-select
            label="Vrsta goriva"
            :options="fuelTypeOptions"
            v-model="fuelType"
            clearable
          />
          <q-select
            label="Broj vrata"
            :options="doornumOptions"
            v-model="doornum"
            clearable
          />
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <q-select
            label="Max snaga motora"
            :options="powerOptions"
            v-model="power"
            clearable
          />
          <q-input label="Max cena (EUR)" v-model="maxPrice" />
          <q-input label="Max kilometraza (km)" v-model="maxMileage" />
          <q-select
            label="Godina od"
            :options="yearOptions"
            v-model="year"
            clearable
          />
        </div>
      </div>

      <div>
        <q-btn label="Primeni" type="submit" color="cyan-8" />
        <q-btn
          label="Resetuj"
          type="reset"
          color="red-8"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  Ad,
  BrandOption,
  defaultBrandOptions,
  Option,
  defaultGearBoxOptions,
  defaultFuelTypeOptions,
  defaultDoorNumOptions,
  defaultPowerOptions,
} from 'components/models';

const emit = defineEmits(['applyFilters']);

const yearOptions = ref<Option[]>([]);
for (let i = 2000; i <= 2022; i++) {
  let option: Option = {
    label: i,
    value: i,
  };
  yearOptions.value.push(option);
}

const params = localStorage.getItem('filters');
const savedParams = params ? JSON.parse(params) : null;

let foundBrand,
  foundModel,
  foundPrice,
  foundMileage,
  foundGearBox,
  foundDoornum,
  foundPower,
  foundYear,
  foundFuelType;
if (savedParams) {
  foundBrand = defaultBrandOptions.find(
    (brand) => brand.value === savedParams.brand
  );

  if (foundBrand) {
    foundModel = foundBrand.models.find(
      (model) => model.value === savedParams.model
    );
  }

  foundPrice = savedParams.price ? savedParams.price : '';
  foundMileage = savedParams.mileage ? savedParams.mileage : '';

  foundGearBox = defaultGearBoxOptions.find(
    (gearBox) => gearBox.value === savedParams.gearBox
  );
  foundDoornum = defaultDoorNumOptions.find(
    (doornum) => doornum.value === savedParams.doornum
  );
  foundPower = defaultPowerOptions.find(
    (power) => power.value === savedParams.power
  );
  foundFuelType = defaultFuelTypeOptions.find(
    (fuelType) => fuelType.value === savedParams.fuelType
  );
  foundYear = yearOptions.value.find((year) => year.value === savedParams.year);
}
const brand = ref<BrandOption | ''>(foundBrand ? foundBrand : '');
const model = ref<Option | ''>(foundModel ? foundModel : '');

const maxPrice = ref(foundPrice ? foundPrice : '');
const maxMileage = ref(foundMileage ? foundMileage : '');

const gearBox = ref<Option | ''>(foundGearBox ? foundGearBox : '');
const gearBoxOptions = ref<Option[]>(defaultGearBoxOptions);

const fuelType = ref<Option | ''>(foundFuelType ? foundFuelType : '');
const fuelTypeOptions = ref<Option[]>(defaultFuelTypeOptions);

const doornum = ref<Option | ''>(foundDoornum ? foundDoornum : '');
const doornumOptions = ref<Option[]>(defaultDoorNumOptions);

const power = ref<Option | ''>(foundPower ? foundPower : '');
const powerOptions = ref<Option[]>(defaultPowerOptions);

const year = ref<Option | ''>(foundYear ? foundYear : '');

setTimeout(() => {
  emit('applyFilters', {
    brand: brand.value ? brand.value.value : '',
    model: model.value ? model.value.value : '',
    price: maxPrice.value,
    mileage: maxMileage.value,
    year: year.value ? year.value.value : '',
    fuelType: fuelType.value ? fuelType.value.value : '',
    doornum: doornum.value ? doornum.value.value : '',
    power: power.value ? power.value.value : '',
    gearBox: gearBox.value ? gearBox.value.value : '',
  });
}, 500);

const updateModelValue = (newBrand: BrandOption) => {
  brand.value = newBrand;
  if (newBrand) {
    model.value = newBrand.models[0];
  } else {
    model.value = '';
  }
};

const onSubmit = () => {
  const params = {
    brand: brand.value ? brand.value.value : '',
    model: model.value ? model.value.value : '',
    price: maxPrice.value,
    mileage: maxMileage.value,
    year: year.value ? year.value.value : '',
    fuelType: fuelType.value ? fuelType.value.value : '',
    doornum: doornum.value ? doornum.value.value : '',
    power: power.value ? power.value.value : '',
    gearBox: gearBox.value ? gearBox.value.value : '',
  };
  localStorage.setItem('filters', JSON.stringify(params));
  emit('applyFilters', params);
};

const onReset = () => {
  model.value = '';
  brand.value = '';
  maxPrice.value = '';
  year.value = '';
  maxMileage.value = '';
  fuelType.value = '';
  doornum.value = '';
  power.value = '';
  gearBox.value = '';
};
</script>
