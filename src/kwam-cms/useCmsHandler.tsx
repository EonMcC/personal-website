import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface IEntry {
  _id: string;
  identifier: string;
  pageId: string;
  projectId: string;
  content: string;
}

export interface IGetContentByProjectResponse {
  status: number;
  data: IEntry[];
}

export interface IContent {
  identifier: string;
}

export interface IPageContent {
  [key: string]: string;
}

export interface IProjectContent {
  [key: string]: IPageContent;
}

export default function useCmsHandler(page: string | null, type: 'PROJECT' | 'PAGE') {

  const projectId = process.env.REACT_APP_KWAMTEK_CMS_PROJECT_ID;
  const baseUrl = process.env.REACT_APP_KWAMTEK_CMS_URL;
  const [pageContent, setPageContent] = useState<IPageContent>();
  const [projectContent, setProjectContent] = useState<IProjectContent>();

  useEffect(() => {
    if (type === "PROJECT") getContentByProject();
    else getContentByPage();
  }, [])

  async function getContentByProject() {
    const response: IGetContentByProjectResponse = await axios.get(`${baseUrl}/${projectId}`);
    if (response) {
      const grouped: any = Object.groupBy(response.data, ({ pageId }) => pageId);
      for (const el in grouped) {
        const pageContent = {};
        for (const e of grouped[el]) {
          // @ts-ignore
          pageContent[e.identifier] = e.content;
        }
        grouped[el] = pageContent;
      }
      setProjectContent(grouped);
    } else {
      window.alert("Error retrieving project content.");
    }
  }

  async function getContentByPage() {
    const response = await axios.get(`${baseUrl}/${projectId}/${page}`) as any;
    const content: any = {};
    if (response) {
      for (const el of response.data) {
        content[el.identifier] = el.content
      }
      setPageContent(content);
    } else {
      window.alert("Error retrieving page content.")
    }
  }

  if (projectContent) return projectContent as IProjectContent;
  else return pageContent as IPageContent;
}