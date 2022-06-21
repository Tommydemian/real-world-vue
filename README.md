
# Basic Routing already setup for us.
# Basic setup for VUEX => similar to REDUX => State management.

## Single File Components: 
You can see more info abour personalization ur [preferences] with [Prettier] and [ESLint].

[component.vue] => Indicates => *SingleFileComponent*

v-for => hecho dentro del parent [el] => Previo a pasar 

### Vue-Router essentials: 
history prop => It comes with the acceptance of history mode on the preferences selected in the Vue CLI

### Axios and the instances being created: 
 U shouldn't create a new instance of axios in every file. 
 const *apiClient*

 ### Dynamic routing: 
Primero pensa en el hecho de que al ruta dinámica va a estar preDefinida por el id que se golpee. 
1. /path/:id 
2. Este id tiene que llegar como [prop]
3. El id tiene que ser accesible como [param] 

- interesting: 
 Para que el componente reciba como [prop] => el /:id que se golpea de manera dinámica tenes que => en router => *props: true*
 Component => props: {
    id: {
        type: Number,
        required: true
    }
 }


 ## sin duda => **Dynamic Routing** es algo que tengo que **reveer**. [IMP]

 # Deployment: 
 1. yarn build => Debería interiorizarme más en el asunto.
 
 2. Encontrar Host Platform
 3. Get *SSL* for => `secure domain`
 4. Build site locally 
 5. Drop those file into the server 
 6. Ensure its being served Correctly

 ## Deployment => Maintenance.

 ### Deployment => Emergency Rollbacks.

# Vue Directives:
 Van en el: <template></template>
 ## v-model: 
 Directive used on **form** [el] => Most of the time is used on *INPUTS* => and type of em 
 - Two way data binding.
 - *How do you make a component v-modeling ready?*

 $emits: 
 - Allow us to send customEvents from outr child Component to the Parent Component.
 emit has 2 arguments: 
 
 1. The name of our event: 
   emit([eventName] => Name whics is used to listen in our parent Comp, payload) 

   Si vos queres que el Parent Comp listen to the event => [$emit](`'customChange'`, *event.target.value*)

   <template>
   <input 
      type="text"
      placeholder"insert your name..."
      @click="$emit(customEvent, event.target.value)" => Emitiendo el evento hacia al father Comp.
   />
   
   </template>

$attrs:
- Attributes, classes and styles.