<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<%--styles--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/components/css/bootstrap/bootstrap.min.css">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/custom.css">


<%--scripts--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/jquery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/bootstrap/bootstrap.min.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/util.js"></script>

<head>
    <title>Sample Ajax Call</title>
</head>
<body>

<div class="container">
  <h2>Button Styles</h2>
  <button type="button" class="btn btn-default">GET</button>
  <button type="button" class="btn btn-primary">POST</button>
  <button type="button" class="btn btn-success">PUT</button>
  <button type="button" class="btn btn-danger">DELETE</button>
</div>


<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/views/samples/ajaxcall.js"></script>


</body>
</html>
