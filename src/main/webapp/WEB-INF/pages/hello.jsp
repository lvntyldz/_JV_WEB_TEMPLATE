<html>

<%--styles--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/components/css/bootstrap/bootstrap.min.css">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/custom.css">


<%--scripts--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/jquery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/bootstrap/bootstrap.min.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/util.js"></script>

<body>
	<h5>${message}</h5>

    <div class="container">
        <h2>Button Styles</h2>
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-link">Link</button>
    </div>
</body>
</html>