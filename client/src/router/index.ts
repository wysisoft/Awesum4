import AddFollowerView from "@/views/AddFollowerView.vue";
import AppSettingsView from "../views/AppSettingsView.vue";
import '@/extensionMethods'
import { resources } from "../resources/Resources";
import AboutView from "../views/AboutView.vue";
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { I18nGlobal } from "../i18nGlobal";
import { awesum } from "../awesum";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";
import { itemType } from "../../../server/typebox";
import NameView from "../views/NameView.vue";
import ConfirmOfflineView from "../views/ConfirmOffline.vue";
import Dexie from "dexie";
import AppView from "@/views/AppView.vue";
import AppCompletionsView from "@/views/AppCompletionsView.vue";
import DatabaseCompletionsView from "@/views/DatabaseCompletionsView.vue";
import ErrorView from "../views/ErrorView.vue";
import LeadersAndFollowersView from "@/views/LeadersAndFollowersView.vue";
import DatabaseView from "@/views/DatabaseView.vue";
import RouterView from "@/views/RouterView.vue";
import DatabaseSettingsView from "@/views/DatabaseSettingsView.vue";
import LeaderView from "@/views/LeaderView.vue";
import RefreshView from "@/views/RefreshView.vue";
import DatabaseUnitSettingsView from "@/views/DatabaseUnitSettingsView.vue";
import DatabaseUnitView from "@/views/DatabaseUnitView.vue";
import EditUnitJsonView from '@/views/EditUnitJsonView.vue';
import RoutersSettingsView from "@/views/RoutersSettingsView.vue";
import RouterSettingsView from "@/views/RouterSettingsView.vue";
import SpellingItemSettingsView from "@/views/SpellingItemSettingsView.vue";
import UnitCompletedView from "@/views/UnitCompletedView.vue";
import AddAssignmentView from "@/views/AddAssignmentView.vue";
import MainView from "@/views/MainView.vue";
import HomeOrMainView from "@/views/HomeOrMainView.vue";
import EditDatabaseJsonView from "@/views/EditDatabaseJsonView.vue";

import OneByTwoDigraphsItemSettingsView from "@/views/OneByTwoDigraphsItemSettingsView.vue";

import LogView from "@/views/LogView.vue";

import SpellingItemView from "@/views/SpellingItemView.vue";

import OneByTwoDigraphsItemView from "@/views/OneByTwoDigraphsItemView.vue";
import Multiplication1x1ItemView from "@/views/Multiplication1x1ItemView.vue";
import Addition1x1ItemView from "@/views/Addition1x1ItemView.vue";
import ItemView from "@/views/ItemView.vue";
import ItemSettingsView from "@/views/ItemSettingsView.vue";

const routes = [

  {
    path: "/",
    name: I18nGlobal.t(resources.Home.key),
    component: HomeOrMainView
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Error.key),
    name: I18nGlobal.t(resources.Error.key),
    component: ErrorView,
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.About.key),
    name: I18nGlobal.t(resources.About.key),
    component: AboutView,
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Login.key),
    name: I18nGlobal.t(resources.Login.key),
    component: LoginView,
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.Refresh.key),
    name: I18nGlobal.t(resources.Refresh.key),
    component: RefreshView,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Settings.key) + "/:app",
    name: I18nGlobal.t(resources.AppSettings.key),
    component: AppSettingsView,
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Settings.key) + '/:app/:database/AddAssignment',
    name: I18nGlobal.t(resources.Add_Assignment.key),
    component: async () => {
      return AddAssignmentView;
    },
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/:app/:database/:unit/completed',
    name: 'unitCompleted',
    component: async () => {
      return UnitCompletedView;
    }
  },
  {
    path: '/:app/:database/:unit/:item(\\d+)',
    name: 'ItemView',
    component: ItemView,
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Settings.key) + '/:app/:database/:unit/:item(\\d+)',
    name: 'ItemSettingsView',
    component: ItemSettingsView,
  },
  
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Settings.key) + '/:app/:database/' + I18nGlobal.t(resources.EditJson.key),
    name: 'databaseEditJson',
    component: async () => {
      return EditDatabaseJsonView;
    }
  },

  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Settings.key) + '/:app/:database/:unit/' + I18nGlobal.t(resources.EditJson.key),
    name: 'unitEditJson',
    component: async () => {
      return EditUnitJsonView;
    }
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Routers.key) + '/:routerMac',
    name: I18nGlobal.t(resources.Router.key),
    component: RouterSettingsView,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/:app/:database/' + I18nGlobal.t(resources.Completions.key),
    name: I18nGlobal.t(resources.DatabaseCompletions.key),
    component: DatabaseCompletionsView
  },
  {
    path: '/:app/:database',
    name: 'AppDatabase',
    component: DatabaseView
  },

  {
    path: '/' + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + '/:app/:database/:unit',
    name: 'SettingsUnit',
    component: DatabaseUnitSettingsView
  },
  {
    path: '/:app/:database/:unit',
    name: 'Unit',
    component: DatabaseUnitView
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Settings.key) + '/:app/:database',
    name: 'AppDatabaseSettings',
    component: DatabaseSettingsView
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Settings.key),
    name: I18nGlobal.t(resources.Settings.key),
    component: SettingsView,
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.Name.key),
    name: I18nGlobal.t(resources.Name.key),
    component: NameView,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: "/" + I18nGlobal.t(resources.i.key) + "/" +
      I18nGlobal.t(resources.ConfirmOffline.key),
    name: I18nGlobal.t(resources.ConfirmOffline.key),
    component: ConfirmOfflineView,
  },
  {
    path: '/:app/' + I18nGlobal.t(resources.Completions.key),
    name: I18nGlobal.t(resources.AppCompletions.key),
    component: AppCompletionsView
  }
  ,
  {
    path: '/:app',
    name: I18nGlobal.t(resources.Apps.key),
    component: AppView
  }
  ,
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.LeadersAndFollowers.key) + '/' + I18nGlobal.t(resources.Leader.key) + '/:leaderEmail',
    name: I18nGlobal.t(resources.Leader.key),
    component: LeaderView,
    meta: {
      requiresLogin: true,
    },
  }
  ,
  {
    path: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.LeadersAndFollowers.key),
    name: I18nGlobal.t(resources.LeadersAndFollowers.key),
    component: LeadersAndFollowersView,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key)  + '/' + I18nGlobal.t(resources.LeadersAndFollowers.key) + '/' + I18nGlobal.t(resources.AddFollower.key),
    name: I18nGlobal.t(resources.Add_Follower.key),
    component: AddFollowerView,
    meta: {
      requiresLogin: true,
    },
  }
  ,
  {
    path: '/' + I18nGlobal.t(resources.i.key)  + '/' + I18nGlobal.t(resources.Routers.key),
    name: I18nGlobal.t(resources.Routers.key),
    component: RoutersSettingsView,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/' + I18nGlobal.t(resources.i.key)  + '/' + I18nGlobal.t(resources.Log.key),
    name: I18nGlobal.t(resources.Log.key),
    component: LogView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[]
});

router.afterEach((to: any, from: any) => {
  awesum.currentDatabaseItem = awesum.currentDatabaseItemTemp
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta.requiresLogin && !awesum.serverEmail) {
    awesum.errorMessage = I18nGlobal.t(resources.You_need_to_login_to_access_$needle$.key, { needle: to.path });
    next({
      name: I18nGlobal.t(resources.Error.key),
    });
    return;
  }

  if (!to.name) {
    awesum.errorMessage = I18nGlobal.t(resources.Page_Not_Found.key) + " - " + to.path;
    next({
      name: I18nGlobal.t(resources.Error.key),

    });
    return;
  }

  const breadcrumbs = [];

  breadcrumbs.push({
    name: I18nGlobal.t(resources.Awesum.key),
    url: "/",
  });

  if (to.name == I18nGlobal.t(resources.Error.key)) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Error.key),
      url: to.path
    });
    next();
    return;
  }

  if (to.name == I18nGlobal.t(resources.About.key)) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.About.key),
      url: to.path
    });
  }

  if (to.name == I18nGlobal.t(resources.Login.key)) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Login.key),
      url: to.path
    });
  }

  if (
    awesum.noInternet && !awesum.serverEmail &&
    to.name != I18nGlobal.t(resources.ConfirmOffline.key)
  ) {
    var databaseNames = await Dexie.getDatabaseNames();
    var mostRecentLogin = await awesum.AwesumDexieGlobalDB.global.get(1);
    if (mostRecentLogin) {
      if (databaseNames.includes("awesum_" + mostRecentLogin.latestEmail)) {
        next({
          name: I18nGlobal.t(resources.ConfirmOffline.key),
        });
        return;
      }
    }
    alert("No internet connection");
    return;
  }

  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Settings.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.Settings.key))?.path ?? ""


    });
  }

  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.LeadersAndFollowers.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Leaders_And_Followers.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.LeadersAndFollowers.key))?.path ?? ""
    });
  }
  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.Routers.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Routers.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.Routers.key))?.path ?? ""
    });
  }
  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.Log.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Log.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.Log.key))?.path ?? ""
    });
  }

  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.Name.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Name.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.Name.key))?.path ?? ""
    });
  }

  if (to.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/" + I18nGlobal.t(resources.Settings.key) + "/" + I18nGlobal.t(resources.LeadersAndFollowers.key) + '/' + I18nGlobal.t(resources.AddFollower.key))) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Add_Follower.key),
      url: routes.find(x => x.name == I18nGlobal.t(resources.AddFollower.key))?.path ?? ""
    });
  }

  if (to.params.routerMac) {
    await awesum.refreshCurrentAppRouters();
    var foundRouter = awesum.currentAppRouters.find(x => x.routerMac.lc(to.params.routerMac.toString()));
    if (!foundRouter) {
      awesum.errorMessage = I18nGlobal.t(resources.Router_$needle$_Not_Found.key, { routerMac: to.params.routerMac.toString() });
      awesum.router.push({
        name: I18nGlobal.t(resources.Error.key)
      });
      next();
      return;
    }
    else {
      awesum.currentRouter = foundRouter;
      breadcrumbs.push({
        name: foundRouter.routerMac,
        url: '/' + I18nGlobal.t(resources.i.key) + '/' + I18nGlobal.t(resources.Routers.key) + '/' + foundRouter.routerMac
      });
    }
  }

  if (to.params.app) {
    var foundApp = awesum.apps.find(x => x.uniqueName.lc(to.params.app.toString()));

    if (!foundApp) {

      var newName = awesum.oldNameRedirects.get(to.params.app.toString());
      if (newName) {
        awesum.router.push({
          name: newName
        });
        return;
      }

      awesum.errorMessage = I18nGlobal.t(resources.Database_$needle$_Not_Found.key, { database: to.params.app.toString() });
      awesum.router.push({
        name: I18nGlobal.t(resources.Error.key)
      });
      next();
      return;
    }
    else {
      breadcrumbs.push({
        name: foundApp.name,
        url: awesum.getDynamicUrl(foundApp, to)
      });
      awesum.currentApp = foundApp;
      await awesum.refreshCurrentDatabases();
    }
  }

  if(to.name == I18nGlobal.t(resources.AppCompletions.key)) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Completions.key),
      url: to.path
    });
  }

  if (to.params.database) {
    var foundDatabase = awesum.currentDatabases.find(x => x.name.lc(to.params.database.toString()));

    if (!foundDatabase) {
      awesum.errorMessage = I18nGlobal.t(resources.Database_$needle$_Not_Found.key, { database: to.params.database.toString() });
      awesum.router.push({
        name: I18nGlobal.t(resources.Error.key)
      });
      next();
      return;
    }
    else {
      breadcrumbs.push({
        name: foundDatabase.name,
        url: awesum.getDynamicUrl(foundDatabase, to)
      });

      awesum.currentDatabase = foundDatabase;
      await awesum.refreshCurrentDatabaseUnits();

      await awesum.refreshCurrentFollowerDatabases();
      await awesum.refreshCurrentDatabaseCompletions();
    }
  }

  if(to.name == I18nGlobal.t(resources.DatabaseCompletions.key)) {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.Completions.key),
      url: to.path
    });
  }

  if(to.name == 'databaseEditJson') {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.EditJson.key),
      url: to.path
    });
    next();
    return;
  }




  if (to.params.unit) {
    var foundDatabaseUnit = awesum.currentDatabaseUnits.find(x => x.name.lc(to.params.unit.toString()));
    if (!foundDatabaseUnit) {
      awesum.errorMessage = I18nGlobal.t(resources.Database_$needle$_Not_Found.key, { unit: to.params.unit.toString() });
      awesum.router.push({
        name: I18nGlobal.t(resources.Error.key)
      });
      next();
      return;
    }
    else {
      breadcrumbs.push({
        name: foundDatabaseUnit.name,
        url: awesum.getDynamicUrl(foundDatabaseUnit, to)
      });

      awesum.currentDatabaseUnit = foundDatabaseUnit;
      await awesum.refreshCurrentDatabaseItems();
    }
  }

  if(to.name == 'unitEditJson') {
    breadcrumbs.push({
      name: I18nGlobal.t(resources.EditJson.key),
      url: to.path
    });
    next();
    return;
  }

  if (to.params.item) {
    var foundDatabaseItem = awesum.currentDatabaseItems.find(x => x.order.toString().lc(to.params.item.toString()));
    if (!foundDatabaseItem) {
      awesum.errorMessage = I18nGlobal.t(resources.Database_$needle$_Not_Found.key, { item: to.params.item.toString() });
      awesum.router.push({
        name: I18nGlobal.t(resources.Error.key)
      });
      next();
      return;
    }
    else {
      breadcrumbs.push({
        name: foundDatabaseItem.order.toString(),
        url: awesum.getDynamicUrl(foundDatabaseItem, to)
      });

      awesum.currentDatabaseItemTemp = foundDatabaseItem;
      //await awesum.refreshCurrentDatabaseItemMedia();
    }

  }


awesum.breadcrumb = breadcrumbs;

  await next();
});



export default router;
