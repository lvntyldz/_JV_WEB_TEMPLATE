package com.lever.template.controller;

import com.google.gson.Gson;
import com.lever.template.model.AjaxModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/ajax")
public class AjaxController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AjaxController.class);

    @RequestMapping(method = RequestMethod.GET)
    public String ajaxPage(ModelMap model) {

        LOGGER.info("ajax default page");

        model.addAttribute("message", "Hello world!");

        return "samples/ajaxcall";
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<HttpStatus> post(@RequestBody String json) {

        LOGGER.info("ajax post method started..");

        Gson gson = new Gson();
        AjaxModel model = gson.fromJson(json, AjaxModel.class);

        LOGGER.info("query param converted to object  by  gson. model:" + model.toString());


        HttpStatus status = HttpStatus.CREATED;


        return new HttpEntity<HttpStatus>(status);
    }

    @RequestMapping(value = "/put", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<HttpStatus> put(@RequestBody String json) {

        LOGGER.info("ajax put method started..");

        Gson gson = new Gson();
        AjaxModel model = gson.fromJson(json, AjaxModel.class);

        LOGGER.info("query param converted to object  by  gson. model:" + model.toString());


        HttpStatus status = HttpStatus.OK;


        return new HttpEntity<HttpStatus>(status);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<HttpStatus> delete(@RequestBody String json) {

        LOGGER.info("ajax delete method started..");

        Gson gson = new Gson();
        AjaxModel model = gson.fromJson(json, AjaxModel.class);

        LOGGER.info("query param converted to object  by  gson. model:" + model.toString());


        HttpStatus status = HttpStatus.ACCEPTED;


        return new HttpEntity<HttpStatus>(status);
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public HttpEntity<List<AjaxModel>> get(AjaxModel model) {

        LOGGER.info("ajax get  method started..");

        List<AjaxModel> models = new ArrayList<AjaxModel>();
        models.add(model);
        models.add(model);
        models.add(model);

        LOGGER.info("query params,  model:" + model.toString());

        return new HttpEntity<List<AjaxModel>>(models);
    }


}