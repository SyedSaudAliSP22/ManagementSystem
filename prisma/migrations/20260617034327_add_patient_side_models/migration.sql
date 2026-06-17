-- CreateTable
CREATE TABLE "user_roles" (
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(50),

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "full_name" VARCHAR(255),
    "role_id" INTEGER,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "dob" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "symptoms" (
    "symptom_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "symptom_description" TEXT NOT NULL,
    "severity_level" INTEGER NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "symptoms_pkey" PRIMARY KEY ("symptom_id")
);

-- CreateTable
CREATE TABLE "medrecords" (
    "med_record_id" SERIAL NOT NULL,

    CONSTRAINT "medrecords_pkey" PRIMARY KEY ("med_record_id")
);

-- CreateTable
CREATE TABLE "presciptions" (
    "pres_id" SERIAL NOT NULL,

    CONSTRAINT "presciptions_pkey" PRIMARY KEY ("pres_id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_roleid" FOREIGN KEY ("role_id") REFERENCES "user_roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "symptoms" ADD CONSTRAINT "fk_userid" FOREIGN KEY ("patient_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
