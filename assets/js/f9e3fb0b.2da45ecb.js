"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[35620],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),c=i,h=s["".concat(r,".").concat(c)]||s[c]||u[c]||o;return t?a.createElement(h,d(d({ref:n},m),{},{components:t})):a.createElement(h,d({ref:n},m))}));function x(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},32887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],d={id:"mutations",title:"Mutations",original_id:"mutations"},l=void 0,m={unversionedId:"mutations",id:"version-v7.0.0/mutations",title:"Mutations",description:"Table of Contents:",source:"@site/versioned_docs/version-v7.0.0/Modern-Mutations.md",sourceDirName:".",slug:"/mutations",permalink:"/docs/v7.0.0/mutations",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v7.0.0/Modern-Mutations.md",tags:[],version:"v7.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1686593451,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"mutations",title:"Mutations",original_id:"mutations"},sidebar:"version-v7.0.0/docs",previous:{title:"Pagination Container",permalink:"/docs/v7.0.0/pagination-container"},next:{title:"Subscriptions",permalink:"/docs/v7.0.0/subscriptions"}},s={},p=[{value:"<code>commitMutation</code>",id:"commitmutation",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Simple Example",id:"simple-example",level:2},{value:"Optimistic Updates",id:"optimistic-updates",level:2},{value:"Updater Configs",id:"updater-configs",level:2},{value:"NODE_DELETE",id:"node_delete",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Example",id:"example",level:4},{value:"RANGE_ADD",id:"range_add",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Example",id:"example-1",level:4},{value:"RANGE_DELETE",id:"range_delete",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"Example",id:"example-2",level:4},{value:"Using updater and optimisticUpdater",id:"using-updater-and-optimisticupdater",level:2},{value:"Committing Local Updates",id:"committing-local-updates",level:2}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#commitmutation"},(0,o.mdx)("inlineCode",{parentName:"a"},"commitMutation"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#simple-example"},"Simple Example")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#optimistic-updates"},"Optimistic Updates")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#updater-configs"},"Updater Configs")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#using-updater-and-optimisticupdater"},"Using updater and optimisticUpdater")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#committing-local-updates"},"Committing Local Updates"))),(0,o.mdx)("h2",{id:"commitmutation"},(0,o.mdx)("inlineCode",{parentName:"h2"},"commitMutation")),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," to create and execute mutations. ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," has the following signature:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"commitMutation(\n  environment: Environment,\n  config: {\n    mutation: GraphQLTaggedNode,\n    variables: {[name: string]: any},\n    onCompleted?: ?(response: ?Object, errors: ?Array<Error>) => void,\n    onError?: ?(error: Error) => void,\n    optimisticResponse?: Object,\n    optimisticUpdater?: ?(store: RecordSourceSelectorProxy) => void,\n    updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,\n    configs?: Array<DeclarativeMutationConfig>,\n  },\n);\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": The ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/relay-environment"},"Relay Environment"),". ",(0,o.mdx)("strong",{parentName:"li"},"Note:")," To ensure the mutation is performed on the correct ",(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),", it's recommended to use the environment available within components (from ",(0,o.mdx)("inlineCode",{parentName:"li"},"this.props.relay.environment"),"), instead of referencing a global environment."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"config"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mutation"),": The ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged mutation query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variables needed for the mutation. For example, if the mutation defines an ",(0,o.mdx)("inlineCode",{parentName:"li"},"$input")," variable, this object should contain an ",(0,o.mdx)("inlineCode",{parentName:"li"},"input")," key, whose shape must match the shape of the data expected by the mutation as defined by the GraphQL schema."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": Callback function executed when the request is completed and the in-memory Relay store is updated with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," function. Takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"response"),' object, which is the "raw" server response, and ',(0,o.mdx)("inlineCode",{parentName:"li"},"errors"),", an array containing any errors from the server. ."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onError"),": Callback function executed if Relay encounters an error during the request."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," data to update the fields on the relevant records in the local data store, ",(0,o.mdx)("em",{parentName:"li"},"before")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," is executed. If an error occurs during the mutation request, the optimistic update will be rolled back."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back.\nThis function takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/relay-store"},"Relay Store"),". In this function, the client defines 'how to' update the local data via the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/relay-store"},"Relay Store API Reference"),".\n",(0,o.mdx)("strong",{parentName:"li"},"Please note:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"It is usually preferable to just pass an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," option instead of an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections)."),(0,o.mdx)("li",{parentName:"ul"},"If you do decide to use an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", often times it can be the same function as ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),": Function used to update the local in-memory store based on the ",(0,o.mdx)("strong",{parentName:"li"},"real")," server response from the mutation. If ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections).\nWhen the server response comes back, Relay first reverts any changes introduced by ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," and will then execute ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),".\nThis function takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/relay-store"},"Relay Store"),". In this function, the client defines 'how to' update the local data based on the server response via the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.0.0/relay-store"},"Relay Store API Reference"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"configs"),":  Array containing objects describing ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),"/",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," configurations. ",(0,o.mdx)("inlineCode",{parentName:"li"},"configs")," provides a convenient way to specify the ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," behavior without having to write an ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," function. See our section on ",(0,o.mdx)("a",{parentName:"li",href:"#updater-configs"},"Updater Configs")," for more details.")))),(0,o.mdx)("h2",{id:"simple-example"},"Simple Example"),(0,o.mdx)("p",null,"Example of a simple mutation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitMutation, graphql} from 'react-relay';\n\nconst mutation = graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationInput!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nfunction markNotificationAsRead(environment, source, storyID) {\n  const variables = {\n    input: {\n      source,\n      storyID,\n    },\n  };\n\n  commitMutation(\n    environment,\n    {\n      mutation,\n      variables,\n      onCompleted: (response, errors) => {\n        console.log('Response received from server.')\n      },\n      onError: err => console.error(err),\n    },\n  );\n}\n")),(0,o.mdx)("h2",{id:"optimistic-updates"},"Optimistic Updates"),(0,o.mdx)("p",null,'To improve perceived responsiveness, you may wish to perform an "optimistic update", in which the client immediately updates to reflect the anticipated new value even before the response from the server has come back. The simplest way to do this is by providing an ',(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticResponse")," and adding it to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config")," that we pass into ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationInput!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nconst optimisticResponse = {\n  markReadNotification: {\n    notification: {\n      seenState: SEEN,\n    },\n  },\n};\n\ncommitMutation(\n  environment,\n  {\n    mutation,\n    optimisticResponse,\n    variables,\n  },\n);\n")),(0,o.mdx)("p",null,"Another way to enable optimistic updates is via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater"),", which can be used for more complicated update scenarios. Using ",(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," is covered in the section ",(0,o.mdx)("a",{parentName:"p",href:"#using-updater-and-optimisticupdater"},"below"),"."),(0,o.mdx)("h2",{id:"updater-configs"},"Updater Configs"),(0,o.mdx)("p",null,"We can give Relay instructions in the form of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"configs")," array on how to use the response from each mutation to update the client-side store. We do this by configuring the mutation with one or more of the following config types:"),(0,o.mdx)("h3",{id:"node_delete"},"NODE_DELETE"),(0,o.mdx)("p",null,"Given a deletedIDFieldName, Relay will remove the node(s) from the store."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note"),": this will not remove it from any connection it might be in. If you want to remove a node from a connection, take a look at ",(0,o.mdx)("a",{parentName:"p",href:"#RANGE_DELETE"},"RANGE_DELETE"),"."),(0,o.mdx)("h4",{id:"arguments-1"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"deletedIDFieldName: string"),": The field name in the response that contains the DataID or DataIDs of the deleted node or nodes")),(0,o.mdx)("h4",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation DestroyShipMutation($input: DestroyShipInput!) {\n    destroyShip(input: $input) {\n      destroyedShipId\n      faction {\n        ships {\n          id\n        }\n      }\n    }\n  }\n`;\n\nconst configs = [{\n  type: 'NODE_DELETE',\n  deletedIDFieldName: 'destroyedShipId',\n}];\n")),(0,o.mdx)("h3",{id:"range_add"},"RANGE_ADD"),(0,o.mdx)("p",null,"Given a parent, information about the connection, and the name of the newly created edge in the response payload Relay will add the node to the store and attach it to the connection according to the range behavior(s) specified in the connectionInfo."),(0,o.mdx)("h4",{id:"arguments-2"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"parentID: string"),": The DataID of the parent node that contains the\nconnection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"connectionInfo: Array<{key: string, filters?: Variables, rangeBehavior:\nstring}>"),": An array of objects containing a connection key, an object\ncontaining optional filters, and a range behavior depending on what behavior we expect (append, prepend, or ignore).",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"filters"),": An object containing GraphQL calls e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"const filters = {'orderby': 'chronological'};"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"edgeName: string"),": The field name in the response that represents the newly created edge")),(0,o.mdx)("h4",{id:"example-1"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation AddShipMutation($input: AddShipInput!) {\n    addShip(input: $input) {\n      shipEdge {\n        node {\n          name\n        }\n      }\n    }\n  }\n`;\n\nfunction commit(environment, factionId, name) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: { factionId, name },\n    },\n    configs: [{\n      type: 'RANGE_ADD',\n      parentID: factionId,\n      connectionInfo: [{\n        key: 'AddShip_ships',\n        rangeBehavior: 'append',\n      }],\n      edgeName: 'shipEdge',\n    }],\n  });\n}\n")),(0,o.mdx)("h3",{id:"range_delete"},"RANGE_DELETE"),(0,o.mdx)("p",null,"Given a parent, connectionKeys, one or more DataIDs in the response payload, and\na path between the parent and the connection, Relay will remove the node(s)\nfrom the connection but leave the associated record(s) in the store."),(0,o.mdx)("h4",{id:"arguments-3"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"parentID: string"),": The DataID of the parent node that contains the\nconnection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"connectionKeys: Array<{key: string, filters?: Variables}>"),": An array of\nobjects containing a connection key and optionally filters.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"filters"),": An object containing GraphQL calls e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"const filters = {'orderby': 'chronological'};"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"pathToConnection: Array<string>"),": An array containing the field names between the parent and the connection, including the parent and the connection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"deletedIDFieldName: string | Array<string>"),": The field name in the response that contains the DataID or DataIDs of the removed node or nodes, or the path to the node or nodes removed from the connection")),(0,o.mdx)("h4",{id:"example-2"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation RemoveTagMutation($input: RemoveTagInput!) {\n    removeTag(input: $input) {\n      removedTagId\n    }\n  }\n`;\n\nfunction commit(environment, todoId, tagId) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: { todoId, tagId },\n    },\n    configs: [{\n      type: 'RANGE_DELETE',\n      parentID: todoId,\n      connectionKeys: [{\n        key: 'RemoveTags_tags',\n      }],\n      pathToConnection: ['todo', 'tags'],\n      deletedIDFieldName: 'removedTagId',\n    }],\n  });\n}\n")),(0,o.mdx)("h2",{id:"using-updater-and-optimisticupdater"},"Using updater and optimisticUpdater"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," are functions that you can pass to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," call when you need full control over how to update the local data store, either optimistically, or based on a server response. Often times, both of these can be the same function."),(0,o.mdx)("p",null,"When you provide these functions, this is roughly what happens during the mutation request:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," is provided, Relay will use it to update the fields under the records as specified by the ids in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),"."),(0,o.mdx)("li",{parentName:"ul"},"If ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," is provided, Relay will execute it and update the store accordingly."),(0,o.mdx)("li",{parentName:"ul"},"After the network comes back, if any optimistic update was applied, it will be rolled back."),(0,o.mdx)("li",{parentName:"ul"},"Relay will then automatically update the fields under the record corresponding to the ids in the response payload."),(0,o.mdx)("li",{parentName:"ul"},"If an ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," was provided, Relay will execute it and update the store accordingly. The server payload will be available to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," as a root field in the store.")),(0,o.mdx)("p",null,"Here are a quick example of adding a todo item to a Todo list using this ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L36"},"example schema"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// AddTodoMutation.js\nimport {commitMutation, graphql} from 'react-relay';\nimport {ConnectionHandler} from 'relay-runtime';\n\nconst mutation = graphql`\n  mutation AddTodoMutation($input: AddTodoInput!) {\n    addTodo(input: $input) {\n      todoEdge {\n        cursor\n        node {\n          complete\n          id\n          text\n        }\n      }\n      viewer {\n        id\n        totalCount\n      }\n    }\n  }\n`;\n\nfunction sharedUpdater(store, user, newEdge) {\n  // Get the current user record from the store\n  const userProxy = store.get(user.id);\n\n  // Get the user's Todo List using ConnectionHandler helper\n  const conn = ConnectionHandler.getConnection(\n    userProxy,\n    'TodoList_todos', // This is the connection identifier, defined here\n    // https://github.com/relayjs/relay-examples/blob/main/todo/js/components/TodoList.js#L76\n  );\n\n  // Insert the new todo into the Todo List connection\n  ConnectionHandler.insertEdgeAfter(conn, newEdge);\n}\n\nlet tempID = 0;\n\nfunction commit(environment, text, user) {\n  return commitMutation(environment, {\n    mutation,\n    variables: {\n      input: {\n        text,\n        clientMutationId: tempID++,\n      },\n    },\n    updater: (store) => {\n      // Get the payload returned from the server\n      const payload = store.getRootField('addTodo');\n\n      // Get the edge of the newly created Todo record\n      const newEdge = payload.getLinkedRecord('todoEdge');\n\n      // Add it to the user's todo list\n      sharedUpdater(store, user, newEdge);\n    },\n    optimisticUpdater: (store) => {\n      // Create a Todo record in our store with a temporary ID\n      const id = 'client:newTodo:' + tempID++;\n      const node = store.create(id, 'Todo');\n      node.setValue(text, 'text');\n      node.setValue(id, 'id');\n\n      // Create a new edge that contains the newly created Todo record\n      const newEdge = store.create(\n        'client:newEdge:' + tempID++,\n        'TodoEdge',\n      );\n      newEdge.setLinkedRecord(node, 'node');\n\n      // Add it to the user's todo list\n      sharedUpdater(store, user, newEdge);\n\n      // Given that we don't have a server response here,\n      // we also need to update the todo item count on the user\n      const userRecord = store.get(user.id);\n      userRecord.setValue(\n        userRecord.getValue('totalCount') + 1,\n        'totalCount',\n      );\n    },\n  });\n}\n")),(0,o.mdx)("p",null,"For details on how to interact with the Relay Store, please refer to our Relay Store ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v7.0.0/relay-store"},"docs"),"."),(0,o.mdx)("h2",{id:"committing-local-updates"},"Committing Local Updates"),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," when you need to update the local store without necessarily executing a mutation (such as in the case of debounced operations). The function takes in a Relay ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment")," and an ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," function."))}u.isMDXComponent=!0}}]);