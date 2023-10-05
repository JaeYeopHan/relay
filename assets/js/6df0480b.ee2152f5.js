"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[13459],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},24459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],s={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c=void 0,l={unversionedId:"network-layer",id:"version-v4.0.0/network-layer",title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v4.0.0/Modern-NetworkLayer.md",sourceDirName:".",slug:"/network-layer",permalink:"/docs/v4.0.0/network-layer",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v4.0.0/Modern-NetworkLayer.md",tags:[],version:"v4.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1696540212,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{id:"network-layer",title:"Network Layer",original_id:"network-layer"},sidebar:"version-v4.0.0/docs",previous:{title:"Relay Environment",permalink:"/docs/v4.0.0/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v4.0.0/query-renderer"}},p={},u=[{value:"Caching",id:"caching",level:2},{value:"Custom open-source implementations",id:"custom-open-source-implementations",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v4.0.0/relay-environment"},"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),(0,a.mdx)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\nconst store = new Store(new RecordSource())\n\nconst environment = new Environment({\n  network,\n  store\n  // ... other options\n});\n\nexport default environment;\n")),(0,a.mdx)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",(0,a.mdx)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",(0,a.mdx)("inlineCode",{parentName:"p"},"uploadables")," parameter)."),(0,a.mdx)("h2",{id:"caching"},"Caching"),(0,a.mdx)("p",null,"Relay modern makes no assumptions about what to cache and will garbage collect any data that is no longer referenced."),(0,a.mdx)("p",null,"You have to implement your own cache strategy. A simple solution is to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"RelayQueryResponseCache"),"(an in-memory cache):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\nimport RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';\n\nconst oneMinute = 60 * 1000;\nconst cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });\n\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n) {\n  const queryID = operation.text;\n  const isMutation = operation.operationKind === 'mutation';\n  const isQuery = operation.operationKind === 'query';\n  const forceFetch = cacheConfig && cacheConfig.force;\n\n  // Try to get data from cache on queries\n  const fromCache = cache.get(queryID, variables);\n  if (\n    isQuery &&\n    fromCache !== null &&\n    !forceFetch\n  ) {\n    return fromCache;\n  }\n\n  // Otherwise, fetch data from server\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: operation.text,\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  }).then(json => {\n    // Update cache on queries\n    if (isQuery && json) {\n      cache.set(queryID, variables, json);\n    }\n    // Clear cache on mutations\n    if (isMutation) {\n      cache.clear();\n    }\n\n    return json;\n  });\n}\n\nconst environment = new Environment({\n  network: Network.create(fetchQuery),\n  store: new Store(new RecordSource()),\n});\n\nexport default environment;\n")),(0,a.mdx)("h2",{id:"custom-open-source-implementations"},"Custom open-source implementations"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"https://github.com/relay-tools/react-relay-network-modern"},"react-relay-network-modern"))," on ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-relay-network-modern"},"npm")," - is a Network Layer for Relay Modern which has built-in highly customizable middlewares for commonly used scenarios: batching query requests, caching, authentication, request retrying, logging. Moreover, you may write your own middlewares with custom logic."))}d.isMDXComponent=!0}}]);