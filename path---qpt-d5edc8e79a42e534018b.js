webpackJsonp([0xe82005b79874],{372:function(e,A){e.exports={data:{site:{siteMetadata:{title:"GREG JOHNS",author:"Greg Johns"}},markdownRemark:{id:"/Users/gregjohns/Projects/Greg-Johns/src/pages/2015-02-06-qpt/index.md absPath of file >>> MarkdownRemark",html:'<p>Today I finally got to do something I’ve been wanting to do for a while.</p>\n<p><code>git tag -a v1.0 -m \'QPT Ver. 1.0 Shipped\'</code></p>\n<p>And with that we pushed Avaya’s first ever OAuth 2.0, Angular 1.3, single page web app.</p>\n<p>QPT, or <strong>Quick Price Tool</strong> in the expanded version helps Avaya customers quote out a mid-market networking design in 3 easy steps. If you have a <em>Google</em>, <em>LinkedIn</em> or <em>Facebook</em> account and are in the mid-market mood for a network then stop by and check it out.</p>\n<p><strong><a href="https://qpt.avaya.com/a1s/login/login.html">QPT</a></strong></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/qpt-dd5cade9a23b861d30320f33c1383432-9b0e7.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHqbslmoP/EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMTEBH/2gAIAQEAAQUCStCuVczSAeA8/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAgBAwEBPwHTKz//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8BmI//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIyEBEx/9oACAEBAAY/Ao7iuFIlUJZ//8QAHBABAAIBBQAAAAAAAAAAAAAAAQARMSFBYYHx/9oACAEBAAE/IXJOjbieVA8H1CEwFQiUlkMT/9oADAMBAAIAAwAAABBkL//EABcRAAMBAAAAAAAAAAAAAAAAAAABYZH/2gAIAQMBAT8Qq9LH/8QAFxEBAAMAAAAAAAAAAAAAAAAAABFRYf/aAAgBAgEBPxDJCn//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMVGh8P/aAAgBAQABPxAS6tpW6byb/D1DaEvhF7FIX4CUlJ0ZkAAGAT//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="QPT"\n        title=""\n        src="/static/qpt-dd5cade9a23b861d30320f33c1383432-f8fb9.jpg"\n        srcset="/static/qpt-dd5cade9a23b861d30320f33c1383432-e8976.jpg 148w,\n/static/qpt-dd5cade9a23b861d30320f33c1383432-63df2.jpg 295w,\n/static/qpt-dd5cade9a23b861d30320f33c1383432-f8fb9.jpg 590w,\n/static/qpt-dd5cade9a23b861d30320f33c1383432-9b0e7.jpg 600w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As a general description and for the sake of this post I’ll describe it as a web based tool for ordering network software, hardware and other supporting services from Avaya. These <em>services</em> have some <em>technical</em> dependencies that can make the orders somewhat complex so the flow of an <em>order</em> in this system goes through four states:</p>\n<ol>\n<li>Design</li>\n<li>Quote pending</li>\n<li>Quote complete</li>\n<li>Ordered</li>\n</ol>\n<p>QPT takes the user through the order process flow up till <em>Ordered</em> state and lets users see an overview of quotes and orders they have put through the system.</p>\n<blockquote>\n<p>While QPT is open to OAuth2 users the main use case for QPT is an Avaya resell partner who would put <strong>N</strong> number of orders through for <strong>N</strong> number of end customers.</p>\n</blockquote>\n<p>Some of the  UX concerns where centered on creating quicker designs (compared to older quote systems), a clean modern interface that works in evergreen browsers, and easing the subject matter knowledge needed to build out a <em>mid</em>market network design.</p>\n<p>Technically this came at a time when the company had just dropped continued support for IE8 browsers. They had also just started moving away from thinking like a big monolithic style IT development shop and micro-services were all the buzz. They also where transitioning from using Microsoft to Oracle/Java middle and back ends and never even thought about client side restful style applications.</p>\n<p>The project was conceived in our department so all requirements came mainly from us where my roll in the project was to work with our UX team to conceive and engineer the initial application, hire a team of web/Java developers, then lead development efforts to our stated goals.</p>\n<p>The project had plenty of challenges and lessons learned that I hope someday to share; but I soon found myself managing 5 more front-end focused web applications. So for the time being it might be less blog posts writing and more focus on dev-ops.</p>',frontmatter:{title:"A quicker pricing tool",date:"February 09, 2015"}}},pathContext:{path:"/qpt/"}}}});
//# sourceMappingURL=path---qpt-d5edc8e79a42e534018b.js.map