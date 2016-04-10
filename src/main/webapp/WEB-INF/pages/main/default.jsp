<html>

<%--styles--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/components/css/bootstrap/bootstrap.min.css">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/custom.css">


<%--scripts--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/jquery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/bootstrap/bootstrap.min.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/util.js"></script>

<body>
    <div class="container">
        <h2>Samples</h2>

        <a href="${pageContext.request.contextPath}/ajax/get" class="btn btn-primary"> AJAX Examples </a>

        <a href="${pageContext.request.contextPath}" class="btn btn-default">Default</a>
        <a href="${pageContext.request.contextPath}"  class="btn btn-success">Success</a>
        <a href="${pageContext.request.contextPath}"  class="btn btn-info">Info</a>
        <a href="${pageContext.request.contextPath}"  class="btn btn-warning">Warning</a>
        <a href="${pageContext.request.contextPath}"  class="btn btn-danger">Danger</a>
        <a href="${pageContext.request.contextPath}"  class="btn btn-link">Link</a>
    </div>
</body>
</html>