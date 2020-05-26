(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{456:function(a,e,t){"use strict";t.r(e);var r=t(55),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"page-frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$page.frontmatter.title))]),a._v(" "),t("p",[a._v(a._s(a.$page.frontmatter.abstract))]),a._v(" "),t("MetadataTable"),a._v(" "),t("h2",{attrs:{id:"language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[a._v("#")]),a._v(" Language")]),a._v(" "),t("Language"),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Different kinds of data need different data and metadata formats. To support these different data and metadata formats we need to extend and specialise the generic Data Package. These specialized types of Data Package (or Data Resource) are termed "),t("strong",[a._v("profiles")]),a._v(". For example, there is a "),t("RouterLink",{attrs:{to:"/tabular-data-package/"}},[a._v("Tabular Data Package")]),a._v(" profile that specializes Data Packages specifically for tabular data.")],1),a._v(" "),t("p",[a._v("Thus, every Package and Resource descriptor has a profile. The namespace for the profile is the type of descriptor, so the default profile, if none is declared, is "),t("code",[a._v("data-package")]),a._v(" for a Package descriptor and "),t("code",[a._v("data-resource")]),a._v(" for a Resource descriptor.")]),a._v(" "),t("p",[a._v("In summary, an extension of Data Package may be formalised as a profile. A profile is a Data Package which extends the default specification towards more specific needs.")]),a._v(" "),t("h3",{attrs:{id:"profile-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile-property"}},[a._v("#")]),a._v(" "),t("code",[a._v("profile")]),a._v(" Property")]),a._v(" "),t("p",[a._v("In addition to the concept, we need an explicit way for publishers to state the profile they are using and consumers to discover this.")]),a._v(" "),t("p",[a._v("Thus, we have a "),t("code",[a._v("profile")]),a._v(" property that declares the profile for the descriptor for this Package or Resource. For the default Data Package and Data Resource descriptor, this SHOULD be present with a value of "),t("code",[a._v("data-package")]),a._v("/"),t("code",[a._v("data-resource")]),a._v(", but if not, the absence of a profile is equivalent to setting "),t("code",[a._v('"profile": "data-package"')]),a._v("/ "),t("code",[a._v('"profile": "data-resource"')]),a._v(".")]),a._v(" "),t("p",[a._v("Custom profiles MUST have a profile property, where the value is a unique identifier for that profile. This unique identifier "),t("code",[a._v("MUST")]),a._v(" be a string and can be in one of two forms. It can be an id from the official "),t("a",{attrs:{href:"/schemas/registry.json"}},[a._v("Data Package Schema Registry")]),a._v(", or, a fully-qualified URL that points directly to a JSON Schema that can be used to validate the profile.")]),a._v(" "),t("p",[a._v("As part of the Frictionless Data Specifications project, we publish a number of Data Package profiles such as:")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/tabular-data-package/"}},[a._v("Tabular Data Package")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/fiscal-data-package/"}},[a._v("Fiscal Data Package")])],1)]),a._v(" "),t("p",[a._v("We also publish the following Data Resource profiles:")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/tabular-data-resource/"}},[a._v("Tabular Data Resource")])],1)])],1)}),[],!1,null,null,null);e.default=o.exports}}]);