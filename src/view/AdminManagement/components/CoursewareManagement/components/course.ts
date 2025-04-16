import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: Array<any>;
};


/**
 * 获得课件分类列表
 * @param data
 */
export const getCourseClassList = (data?: object) => {
  return http.request<Result>("get", "/admin-api/siku/kejian-category/page", {
    params:data
  });
};

/**
 * 获得课件分类列表
 * @param data
 */
export const getCourseTreeList = (data?: object) => {
  return http.request<Result>("get", "/admin-api/siku/kejian-category/get_all", {
    params:data
  });
};
/**
 * 获得课件分类列表
 * @param data
 */
export const getCoursePage = (data?: object) => {
  return http.request<Result>("get", "/admin-api/siku/kejian/page", {
    params:data
  });
};
/**
 * 新增课件分类
 * @param data
 */
export const addCourseClass = (data?: object) => {
  return http.request<Result>("post", "/admin-api/siku/kejian-category/create", {
    data
  });
};
/**
 * 修改课件分类
 * @param data
 */
export const updateCourseClass = (data?: object) => {
  return http.request<Result>("put", "/admin-api/siku/kejian-category/update\n", {
    data
  });
};
/**
 * 删除课件分类
 * @param data
 */
export const deleteCourseClass = (data?: object) => {
  return http.request<Result>("delete", "/admin-api/siku/kejian-category/delete", {
    params:data
  });
};

/**
 * 获得课件管理详情
 * @param data
 */
export const getCourseDetail = (data?: object) => {
  return http.request<Result>("get", "/admin-api/siku/kejian/get", {
    params:data
  });
};
/**
 * 新增讲师档案
 * @param data
 */
export const addCourse = (data?: object) => {
  return http.request<Result>(
    "post",
    "/admin-api/siku/kejian/create",
    { data }
  );
};
/**
 * 修改课件管理
 * @param data
 */
export const updateCourse = (data?: object) => {
  return http.request<Result>(
    "put",
    "/admin-api/siku/kejian/update",
    { data }
  );
};
/**
 * 删除课件管理
 * @param data
 */
export const deleteCourse = (data?: object) => {
  return http.request<Result>(
    "delete",
    "/admin-api/siku/kejian/delete",
    { params:data }
  );
};
