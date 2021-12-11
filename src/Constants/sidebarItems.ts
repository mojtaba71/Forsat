import SettingsIcon from "@material-ui/icons/Settings";
import StorefrontIcon from "@material-ui/icons/Storefront";
import React from "react";
import { SidebarItems } from "../Models/Sidebar/Sidebar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DnsIcon from "@material-ui/icons/Dns";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import AssessmentIcon from "@material-ui/icons/Assessment";
import StorageIcon from "@material-ui/icons/Storage";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PieChartIcon from "@material-ui/icons/PieChart";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import SpeedIcon from "@material-ui/icons/Speed";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const SidebarItemsList: SidebarItems[] = [
  {
    menu: {
      name: "setting",
      menuTitle: "تنظیمات",
      type: 2,
      menuIcon: function () {
        return React.createElement(SettingsIcon);
      },
      componentName: "Test",
      url: "/main",
      open: false,
    },
    childs: [
      {
        menu: {
          name: "setting",
          menuTitle: "سرورها",
          type: 2,
          menuIcon: function () {
            return React.createElement(DnsIcon);
          },
          componentName: "Test",
          url: "/main/setting",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "مدیریت نقش",
          type: 1,
          menuIcon: function () {
            return React.createElement(PersonAddDisabledIcon);
          },
          componentName: "Test",
          url: "/main/role-management",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "مدیریت کاربر",
          type: 1,
          menuIcon: function () {
            return React.createElement(AccountCircleIcon);
          },
          componentName: "Test",
          url: "/main/user-management",
        },
        childs: [],
      },
    ],
  },
  {
    menu: {
      name: "setting",
      menuTitle: "گزارشات",
      type: 2,
      menuIcon: function () {
        return React.createElement(AssessmentIcon);
      },
      componentName: "Test",
      url: "/main",
      open: false,
    },
    childs: [
      {
        menu: {
          name: "setting",
          menuTitle: "پایگاه داده",
          type: 2,
          menuIcon: function () {
            return React.createElement(StorageIcon);
          },
          componentName: "Test",
          url: "/main/setting",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "گزارش کاربران",
          type: 1,
          menuIcon: function () {
            return React.createElement(ContactMailIcon);
          },
          componentName: "Test",
          url: "/main/store-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "گزارش عملکرد",
          type: 1,
          menuIcon: function () {
            return React.createElement(PieChartIcon);
          },
          componentName: "Test",
          url: "/main/store-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "گزارش سیستم",
          type: 1,
          menuIcon: function () {
            return React.createElement(SettingsSystemDaydreamIcon);
          },
          componentName: "Test",
          url: "/main/store-operation",
        },
        childs: [],
      },
    ],
  },
  {
    menu: {
      name: "setting",
      menuTitle: "عملیات",
      type: 2,
      menuIcon: function () {
        return React.createElement(FormatListNumberedRtlIcon);
      },
      componentName: "Test",
      url: "/main",
      open: false,
    },
    childs: [
      {
        menu: {
          name: "setting",
          menuTitle: "تایید امضا ساده",
          type: 2,
          menuIcon: function () {
            return React.createElement(FingerprintIcon);
          },
          componentName: "Test",
          url: "/main/simple-signature",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "تایید امضا پیشرفته",
          type: 1,
          menuIcon: function () {
            return React.createElement(SpeedIcon);
          },
          componentName: "Test",
          url: "/main/store-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "addStore",
          menuTitle: "مدیریت کاربر",
          type: 1,
          menuIcon: function () {
            return React.createElement(PersonAddIcon);
          },
          componentName: "Test",
          url: "/main/user-management",
        },
        childs: [],
      },
    ],
  },
];
export default SidebarItemsList;
