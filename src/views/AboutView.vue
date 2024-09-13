<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-layout">
    <div class="page-layout__inner">
      <div class="page-layout__row">
        <img
          src="@/assets/images/author.jpg"
          alt=""
          width="100"
          height="100"
          class="author-image"
        />
        <p class="page-layout__intro">
          Автор этого безобразия - Юлия Власова (то есть, я). А вот другое моё портфолио:
        </p>
      </div>
      <ul>
        <li>
          <a href="https://juliavlasova.github.io/test-petrograd-group/" target="_blank"
            >Анимация всякая разная</a
          >
        </li>
        <li>
          <a href="https://juliavlasova.github.io/jvwebdesign/" target="_blank"
            >Сайт-визитка, древнейшее создание</a
          >
        </li>
        <li>
          <a href="https://juliavlasova.github.io/taichi/" target="_blank">Дипломная работа</a>
        </li>
        <li>
          <a href="https://juliavlasova.github.io/roistat-julia-vlasova/" target="_blank"
            >Рандомное тестовое</a
          >
        </li>
      </ul>
      <p>И куча коммерческих работ:</p>
      <ul>
        <li>
          <a href="https://www.link-assistant.com/keyword-research/keyword-gap.html" target="_blank"
            >Keyword Gap Analysis Tool</a
          >
        </li>
        <li>
          <a href="https://awario.com/affiliates/" target="_blank">Awario Affiliate Program</a>
        </li>
        <li>
          <a
            href="https://www.link-assistant.com/website-auditor/core-web-vitals-audit.html"
            target="_blank"
            >Core Web Vitals audit
          </a>
        </li>
        <li>
          <a href="https://www.link-assistant.com/backlink-api.html" target="_blank"
            >Backlinks API</a
          >
        </li>
        <li>
          <a
            href="https://www.link-assistant.com/seo-spyglass/backlink-history.html"
            target="_blank"
            >Backlink History</a
          >
        </li>
        <li>
          <a href="https://www.link-assistant.com/seo-agencies.html" target="_blank"
            >Best SEO Agencies</a
          >
        </li>
        <li>
          <a href="https://www.link-assistant.com/new-year-2022.html" target="_blank">New Year</a>
        </li>
        <li>
          <a href="https://www.link-assistant.com/backlink-api-comparison.html" target="_blank"
            >BACKLINK DATA</a
          >
        </li>
        <li>
          <a href="https://www.link-assistant.com/rank-tracker/serp-analysis.html" target="_blank"
            >SERP Checker Tool</a
          >
        </li>
        <li><a href="https://www.link-assistant.com/pricing.html" target="_blank">Pricing</a></li>
        <li>
          <a href="https://www.link-assistant.com/learning-hub/seo-academy.html" target="_blank"
            >SEO academy</a
          >
        </li>
      </ul>
    </div>
    <RouterLink to="/"><span class="page-layout__close"></span></RouterLink>
  </div>
</template>
