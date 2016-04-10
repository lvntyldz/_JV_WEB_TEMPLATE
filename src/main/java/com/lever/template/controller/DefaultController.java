package com.lever.template.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/")
public class DefaultController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DefaultController.class);

    @RequestMapping(method = RequestMethod.GET)
    public String printWelcome(ModelMap model) {

        LOGGER.info("logback started..");

        model.addAttribute("message", "Hello world!");
        return "main/default";
    }
}