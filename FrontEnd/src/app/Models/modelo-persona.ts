export interface Persona {
    title:              string;
    titleES:            string;
    name:               string;
    lastName:           string;
    profileImage:       string;
    aboutMeEsp:         string;
    aboutMeIng:         string;
    experienciaLaboral: ExperienciaLaboral[];
    softSkills:         string[];
    hardSkills:         HardSkill[];
}

export interface ExperienciaLaboral {
    empresa:      string;
    localizacion: string;
    anioInicio:   string;
    anioFin:      string;
    ocupacion:    string;
}

export interface HardSkill {
    nombre:     string;
    porcentaje: number;
}
