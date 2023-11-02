import React from "react";
import { useSelector } from "react-redux";

import { obApp, obForm } from "../../../redux/actions/model";
import { obFormService } from "../../../redux/actions/service";

const useApp = () => {
  const {
    app,
    form,
  } = useSelector(state => state);

  const schema = React.useMemo(() => {
    return form.schema
  }, [form]);

  const handleMakeLoading = () => {
    obApp.setLoading();
    setTimeout(() => {
      obApp.endLoading();
    }, 2000)
  }

  const handleFieldChange = (section, subsection, code, value) => {
    obForm.setField(section, subsection, code, value);
  }

  const handleSendForm = async () => {
    await obFormService.send();
  }

  const handleAddSubSection = (section) => {
    obForm.addSubSection(section);
  }

  const handleRemoveSubSection = (section) => {
    obForm.removeSubSection(section);
  }

  const handleEraseSubSection = (section) => {
    obForm.eraseSubSection(section);
  }

  const title = 'Анкета кандидата';
  const subtitle = 'Заполните, пожалуйста, анкету, отвечая на все вопросы полно и не оставляя пустых строчек';

  const alertTitle = 'Ваши персональные данные надежно защищены!';
  const alertSubtitle = 'В первую очередь благодаря безопасному протоколу HTTPS, который работает абсолютно на всех сервисах НАО «Красная поляна»';

  return {
    app,
    schema,
    title,
    subtitle,
    alertTitle,
    alertSubtitle,
    handleMakeLoading,
    handleFieldChange,
    handleSendForm,
    handleAddSubSection,
    handleRemoveSubSection,
    handleEraseSubSection,
  }
};

export default useApp;