declare module "*.vue" {
  import { defineComponent } from "vue";

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "library1/HelloWorld"
declare module "library1/Test"