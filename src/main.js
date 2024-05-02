import { createApp } from "vue"

import App from "./App.vue"
import BaseCardVue from "./components/ui/BaseCard.vue"
import BaseButtonVue from "./components/ui/BaseButton.vue"
import BaseDialogVue from "./components/ui/BaseDialog.vue"

const app = createApp(App)

app.component("base-card", BaseCardVue)
app.component("base-button", BaseButtonVue)
app.component("base-dialog", BaseDialogVue)

app.mount("#app")
