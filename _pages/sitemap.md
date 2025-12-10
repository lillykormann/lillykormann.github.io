---
layout: archive
title: "Author Information"
permalink: /sitemap/
author_profile: true
---

{{% include base_path %}

<ul>
  {% if site.author.employer %}
  <li><strong>Affiliation:</strong> {{ site.author.employer }}</li>
  {% endif %}

  {% if site.author.email %}
  <li><strong>Email:</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
  {% endif %}

  {% if site.author.orcid %}
  <li><strong>ORCID:</strong> <a href="{{ site.author.orcid }}" target="_blank">{{ site.author.orcid }}</a></li>
  {% endif %}

  {% if site.author.nasaads %}
  <li><strong>ADS:</strong> <a href="{{ site.author.nasaads }}" target="_blank">NASA ADS Profile</a></li>
  {% endif %}
</ul>
