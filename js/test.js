document.write(`
<script id="footer_el" type="text/html">                
<h3>{{ d.title }}</h3>
<ul>
{{#  layui.each(d.list, function(index, item){ }}
    <li>
    <span>{{ item.modname }}</span>
    <span>{{ item.alias }}：</span>
    <span>{{ item.site || '' }}</span>
    </li>
{{#  }); }}
{{#  if(d.list.length === 0){ }}
    无数据
{{#  } }} 
</ul>
</script>
`)