<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<%--styles--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/components/css/bootstrap/bootstrap.min.css">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/custom.css">


<%--scripts--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/jquery/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/components/js/bootstrap/bootstrap.min.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/util.js"></script>
<script type="text/javascript">
  UTIL.url = "${pageContext.request.contextPath}";
</script>

<head>
    <title>Sample Ajax Call</title>
</head>
<body>

<div class="container">

  <button type="button" class="btn btn-default get-btn">GET</button>
  <button type="button" class="btn btn-primary post-btn">POST</button>
  <button type="button" class="btn btn-success put-btn ">PUT</button>
  <button type="button" class="btn btn-danger del-btn">DELETE</button>
  <button type="button" class="btn btn-warning reset-btn">RESET</button>

  <hr/>
  <div class="row">

    <div class="col-md-12">
      <div class="col-md-6">
        Request
        <textarea class="form-control" rows="8" id="request-textarea">Request</textarea>
      </div>
      <div class="col-md-6">
        Response
        <textarea class="form-control" rows="8" id="response-textarea">Response</textarea>
      </div>
    </div>
  </div>

  <hr/>
  <div class="row">

    <div class="col-md-12">
      <div class="col-md-6">
        status
        <textarea class="form-control" rows="8" id="status-textarea">status</textarea>
      </div>
      <div class="col-md-6">
        xhr
        <textarea class="form-control" rows="8" id="xhr-textarea">xhr</textarea>
      </div>
    </div>
  </div>


</div>


<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/views/samples/ajaxcall.js"></script>


</body>
</html>
